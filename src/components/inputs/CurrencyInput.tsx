import React, { useState } from "react";
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
  value?: number;
  currency: string;
  currencies: string[];
  onCurrencyChange: (currency: string) => void;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
};

const CurrencyInput = ({
  label = "Amount",
  value = 0,
  currency,
  currencies,
  onCurrencyChange,
  onValueChange,
  min = 0,
  max = 1000000,
}: CurrencyInputProps) => {
  const [amount, setAmount] = useState<number>(value);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(currency);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (newValue >= min && newValue <= max) {
      setAmount(newValue);
      onValueChange(newValue);
    }
  };

  const handleCurrencyChange = (e: SelectChangeEvent) => {
    const newCurrency = e.target.value;
    setSelectedCurrency(newCurrency);
    onCurrencyChange(newCurrency);
  };

  return (
    <Grid container spacing={2}>
      {/* Amount input */}
      <Grid item xs={8}>
        <TextField
          label={label}
          type="number"
          value={amount}
          onChange={handleAmountChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {selectedCurrency}
              </InputAdornment>
            ),
          }}
          fullWidth
          inputProps={{
            min: min,
            max: max,
          }}
        />
      </Grid>

      {/* Currency selection */}
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
