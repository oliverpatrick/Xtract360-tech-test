import { ConfigJson } from "../types/configItem";
import { FieldConfig } from "../types/inputAttributes";
import configJson from "../configurationToImplement.json";

export const getConfiguration = (): FieldConfig[] => {
  return (configJson as ConfigJson).map((item): FieldConfig => {
    switch (item.type) {
      case "textInput":
        return {
          type: "textInput",
          label: item.label,
          path: item.path,
          defaultValue: item.defaultValue as string | undefined,
          //   required: item.required,
        };
      case "enumInput":
        return {
          type: "enumInput",
          label: item.label,
          path: item.path,
          values: item.values || [],
          defaultValue: item.defaultValue as string | undefined,
          //   required: item.required,
        };
      case "integerInput":
        return {
          type: "integerInput",
          label: item.label,
          path: item.path,
          min: item.min as number,
          max: item.max as number,
          defaultValue: item.defaultValue as number | undefined,
          //   required: item.required,
        };
      case "currencyInput":
        return {
          type: "currencyInput",
          label: item.label,
          path: item.path,
          min: item.min,
          max: item.max,
          currencies: item.currencies || [],
          //   defaultValue: item.defaultValue as
          //     | { currency: string; value: number }
          //     | undefined,
          //   required: item.required,
        };
      default:
        throw new Error(`Unknown input type: ${item.type}`);
    }
  });
};
