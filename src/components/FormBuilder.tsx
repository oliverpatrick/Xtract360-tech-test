/* eslint-disable react/display-name */
import React, { ChangeEvent, useEffect, useState, useMemo } from "react";
import { getData, setDeep } from "../utilities/getAndSetData";
import CurrencyInput from "./inputs/CurrencyInput";
import SelectMenu from "./inputs/SelectInput";
import TextInput from "./inputs/TextInput";
import NumericInput from "./inputs/NumericInput";
import { getValueFromObjectData } from "../utilities/getValueFromObjectData";
import {
  Button,
  Grid,
  Paper,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { FormObject } from "../types/formObject";
import { FieldConfig } from "../types/inputAttributes";

interface FormBuilderProps {
  configuration: FieldConfig[];
}

const FormBuilder: React.FC<FormBuilderProps> = ({ configuration }) => {
  const [formData, setFormData] = useState<FormObject>({});
  const [savedObject, setSavedObject] = useState<FormObject | undefined>();

  useEffect(() => {
    const initialData = getData();
    const mergedData = configuration.reduce((acc, item) => {
      const existingValue = getValueFromObjectData(item.path, initialData);
      if (existingValue !== undefined) {
        return setDeep(acc, item.path, existingValue);
      } else if (item.defaultValue !== undefined) {
        return setDeep(acc, item.path, item.defaultValue);
      }
      return acc;
    }, initialData);
    setFormData(mergedData);
    console.log("initialData", initialData);
  }, [configuration]);

  const onSave = () => {
    setSavedObject({ ...formData });
  };

  const handleChange = (
    path: string,
    value: string | number | object | null
  ) => {
    setFormData((prevData) => setDeep(prevData, path, value));
  };

  const handleCurrencyChange = (path: string, currency: string) => {
    setFormData((prevData) => {
      const currentValue = getValueFromObjectData(path, prevData) as
        | { currency: string; value: number }
        | undefined;
      return setDeep(prevData, path, {
        currency,
        value: currentValue?.value || 0,
      });
    });
  };

  const renderField = useMemo(
    () => (item: FieldConfig) => {
      // const value =
      //   getValueFromObjectData(item.path, formData) || item.defaultValue;
      const value =
        getValueFromObjectData(item.path, formData) !== undefined
          ? getValueFromObjectData(item.path, formData)
          : item.defaultValue;

      const commonProps = {
        key: item.path,
        label: item.label,
        value,
      };

      switch (item.type) {
        case "textInput":
          return (
            <TextInput
              {...commonProps}
              value={value === null || value === undefined ? "" : String(value)}
              onChange={(
                e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => handleChange(item.path, e.target.value)}
            />
          );
        case "enumInput":
          return (
            <SelectMenu
              {...commonProps}
              value={String(value)}
              options={item.values}
              defaultValue={item.defaultValue || ""}
              onChange={(e: SelectChangeEvent<string>) =>
                handleChange(item.path, e.target.value)
              }
            />
          );
        case "integerInput":
          return (
            <NumericInput
              {...commonProps}
              value={value === null || value === undefined ? "" : Number(value)} // allow empty field
              min={item.min}
              max={item.max}
              onChange={
                (e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(
                    item.path,
                    e.target.value ? Number(e.target.value) : null
                  ) // handle empty case
              }
            />
          );
        case "currencyInput": {
          const currencyValue = value as
            | { currency: string; value: number }
            | undefined;
          return (
            <CurrencyInput
              {...commonProps}
              value={
                currencyValue?.value !== undefined ? currencyValue.value : ""
              }
              currencies={item.currencies}
              currency={currencyValue?.currency || item.currencies?.[0]}
              onCurrencyChange={(currency: string) =>
                handleCurrencyChange(item.path, currency)
              }
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(item.path, {
                  currency: currencyValue?.currency || item.currencies?.[0],
                  value:
                    e.target.value === "" ? undefined : Number(e.target.value),
                })
              }
            />
          );
        }
        default:
          return null;
      }
    },
    [formData, handleChange, handleCurrencyChange]
  );

  return (
    <Grid container spacing={2} sx={{ width: 500 }}>
      <Grid item xs={12}>
        <Typography variant="h4">Form</Typography>
      </Grid>
      {configuration.map((item: FieldConfig) => (
        <Grid item xs={12} key={item.path}>
          {renderField(item)}
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSave}>
          Save Changes
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="elevation" style={{ margin: "10px" }}>
          <Typography variant="h5">Output</Typography>
          <div style={{ textAlign: "left" }}>
            <pre>{JSON.stringify(savedObject, null, 2)}</pre>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default FormBuilder;
