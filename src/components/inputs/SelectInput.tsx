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
  onChange: (event: SelectChangeEvent<string>) => void;
  options: string[];
  defaultValue: string;
};

/**
 * Select menu component
 *
 * @component
 * @param {SelectMenuProps} SelectMenuProps Type
 * @param {string} [label="Select"]
 * @param {string} [value=""]
 * @param {(value: string) => void} onValueChange
 * @param {string[]} options
 * @param {string} defaultValue
 * @returns {React.FC}
 */
const SelectMenu: React.FC<SelectMenuProps> = ({
  label = "Select",
  value = "",
  onChange,
  options,
  defaultValue,
}: SelectMenuProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>{label}</InputLabel>
          <Select
            label={label}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
          >
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
