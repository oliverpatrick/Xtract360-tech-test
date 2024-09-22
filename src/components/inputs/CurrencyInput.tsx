import React, { ChangeEventHandler, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Grid,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

type CurrencyInputProps = {
  label?: string;
  value?: number | string;
  currency: string;
  currencies: string[];
  onCurrencyChange: (currency: string) => void;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  min?: number;
  max?: number;
  // defaultValue?: number;
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label = "Amount",
  value = "",
  currency,
  currencies,
  onCurrencyChange,
  onChange,
  min = 0,
  max = 1000000,
}: // defaultValue = 0,
CurrencyInputProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(currency);

  const handleCurrencyChange = (e: SelectChangeEvent) => {
    const newCurrency = e.target.value;
    setSelectedCurrency(newCurrency);
    onCurrencyChange(newCurrency);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          label={label}
          type="number"
          value={value}
          onChange={onChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {selectedCurrency}
              </InputAdornment>
            ),
          }}
          // defaultValue={defaultValue}
          fullWidth
          inputProps={{
            min: min,
            max: max,
          }}
        />
      </Grid>

      <Grid item xs={4}>
        <Select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          fullWidth
        >
          {currencies.map((curr) => (
            <MenuItem key={curr} value={curr}>
              {curr}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default CurrencyInput;
