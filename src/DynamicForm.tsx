import React, { ChangeEventHandler, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  TextField,
  MenuItem,
  Paper,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { MyObject } from "./types";
import { setDeep } from "./utils";

type DynamicFormProps = {
  initialData: MyObject;
};

const DynamicForm = ({ initialData }: DynamicFormProps): JSX.Element => {
  const [formData, setFormData] = useState<MyObject>(initialData);
  const [savedData, setSavedData] = useState<MyObject>();

  // Helper to handle input change
  const onChange =
    (
      path: string
    ): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
    (event) => {
      setFormData(setDeep(formData, path, event.target.value));
    };

  // Render a form field based on the config type
  // const renderField = (fieldConfig: FieldConfig) => {
  //   const { type, label, path } = fieldConfig;

  //   // Extract existing value from formData based on path
  //   const pathParts = path.split(".");
  //   const value = pathParts.reduce((acc, part) => acc?.[part] ?? "", formData);

  //   switch (type) {
  //     case "textInput":
  //       return (
  //         <TextField
  //           label={label}
  //           value={value || ""}
  //           fullWidth
  //           onChange={onChange(path)}
  //         />
  //       );

  //     case "integerInput":
  //       return (
  //         <TextField
  //           label={label}
  //           type="number"
  //           value={value || ""}
  //           fullWidth
  //           inputProps={{
  //             min: fieldConfig.min ?? 0,
  //             max: fieldConfig.max ?? 100,
  //           }}
  //           onChange={onChange(path)}
  //         />
  //       );

  // case "enumInput":
  return (
    <FormControl fullWidth>
      <InputLabel>{"label"}</InputLabel>
      <Select label={"label"} value={"value"} fullWidth onChange={() => null}>
        {["bentley", "bmw"].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

//     case "currencyInput":
//       const currencyValue = formData.vehicle?.tradeValue?.value || 0;
//       const currency =
//         formData.vehicle?.tradeValue?.currency || fieldConfig.currencies[0];
//       return (
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               label="Amount"
//               type="number"
//               value={currencyValue || ""}
//               fullWidth
//               inputProps={{
//                 min: fieldConfig.min ?? 0,
//                 max: fieldConfig.max ?? 1000000,
//               }}
//               onChange={onChange(`${path}.value`)}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               label="Currency"
//               select
//               value={currency || ""}
//               fullWidth
//               onChange={onChange(`${path}.currency`)}
//             >
//               {fieldConfig.currencies.map((cur) => (
//                 <MenuItem key={cur} value={cur}>
//                   {cur}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//         </Grid>
//       );

//     default:
//       return null;
//   }
// };

// // Handle form submission
// const onSaveChanges = () => {
//   setSavedData(formData);
// };

// return (
//   <Grid container spacing={2}>
//     <Grid item xs={12}>
//       <Paper variant="elevation" style={{ margin: "10px", padding: "20px" }}>
//         <Typography variant="h4">Dynamic Form</Typography>
//         <Grid container spacing={2}>
//           {config.map((fieldConfig, index) => (
//             <Grid item xs={12} key={index}>
//               {renderField(fieldConfig)}
//             </Grid>
//           ))}
//         </Grid>
//         <Button variant="outlined" onClick={onSaveChanges}>
//           Save Changes
//         </Button>
//       </Paper>
//     </Grid>

//     {/* Display saved data */}
//     {savedData && (
//       <Grid item xs={12}>
//         <Paper
//           variant="elevation"
//           style={{ margin: "10px", padding: "20px" }}
//         >
//           <Typography variant="h5">Output</Typography>
//           <pre>{JSON.stringify(savedData, null, 2)}</pre>
//         </Paper>
//       </Grid>
//     )}
//   </Grid>
//   );
// };

export default DynamicForm;
