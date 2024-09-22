import { ChangeEventHandler } from "react";
// import { TextField, Grid } from "@mui/material";

export type TextInputProps = {
  label?: string;
  value?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  fullWidth?: boolean;
};

// /**
//  * Text input component
//  *
//  * @param {TextInputProps} TextInputProps Type
//  * @param {string} [label="Text Input"]
//  * @param {string} [value=""]
//  * @param {(value: string) => void} onValueChange
//  * @param {string} [placeholder=""]
//  * @param {boolean} [fullWidth=true]
//  * @returns {*}
//  */
// const TextInput: React.FC<TextInputProps> = ({
//   label = "Text Input",
//   value = "",
//   onChange,
//   placeholder = "",
//   fullWidth = true,
// }: TextInputProps) => {
//   console.log("TextInput", label, value, onChange, placeholder, fullWidth);
//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <TextField
//           label={label}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           fullWidth={fullWidth}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default TextInput;
import React, { useCallback } from "react";
import { TextField, Grid } from "@mui/material";

const TextInput: React.FC<TextInputProps> = ({
  label = "Text Input",
  value = "",
  onChange,
  placeholder = "",
  fullWidth = true,
}) => {
  const handleChange = useCallback(onChange, [onChange]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label={label}
          value={value === null || value === undefined ? "" : value}
          onChange={handleChange}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
      </Grid>
    </Grid>
  );
};

export default TextInput;
