import React, { ChangeEvent } from "react";
import { TextField, Grid } from "@mui/material";

type TextInputProps = {
  label?: string;
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
};

const TextInput = ({
  label = "Text Input",
  value = "",
  onValueChange,
  placeholder = "",
  fullWidth = true,
}: TextInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label={label}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
      </Grid>
    </Grid>
  );
};

export default TextInput;
