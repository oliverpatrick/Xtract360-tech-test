import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
} from "@mui/material";

type SelectMenuProps = {
  label?: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: string[];
};

const SelectMenu = ({
  label = "Select",
  value = "",
  onValueChange,
  options,
}: SelectMenuProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onValueChange(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select label={label} value={selectedValue} onChange={handleChange}>
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SelectMenu;
