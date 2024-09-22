import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";

type NumericInputProps = {
  label?: string;
  value?: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

const NumericInput = ({
  label = "Number",
  value = 0,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
}: NumericInputProps) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setInputValue(newValue);
      onValueChange(newValue);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label={label}
          type="number"
          value={inputValue}
          onChange={handleChange}
          fullWidth
          inputProps={{
            min: min,
            max: max,
            step: step,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default NumericInput;
