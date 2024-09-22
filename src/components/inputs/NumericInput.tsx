import { ChangeEventHandler } from "react";
import { TextField, Grid, FormControl } from "@mui/material";

type NumericInputProps = {
  label?: string;
  value?: number | string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  step?: number;
};

/**
 * Numeric input component
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} [props.label="Number"] - The label for the numeric input field.
 * @param {number} [props.value=0] - The current value of the numeric input field.
 * @param {ChangeEventHandler<HTMLInputElement>} props.onChange - The change event handler for the input field.
 * @param {number} [props.min=0] - The minimum value allowed for the numeric input field.
 * @param {number} [props.max=100] - The maximum value allowed for the numeric input field.
 * @param {number} [props.step=1] - The step value for the numeric input field.
 * @returns {React.FC} The rendered numeric input component.
 */
const NumericInput: React.FC<NumericInputProps> = ({
  label = "Number",
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}: NumericInputProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label={label}
            type="number"
            value={value}
            onChange={onChange}
            fullWidth
            inputProps={{
              min: min,
              max: max,
              step: step,
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default NumericInput;
