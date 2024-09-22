import { assocPath } from "ramda";
import { FormObject } from "../types/formObject";
import objectJson from "../object.json";
// import configJson from "../configurationToImplement.json";

export const setDeep = (
  obj: FormObject,
  path: string,
  value: string | number | object | null
): FormObject => {
  return assocPath(path.split("."), value)(obj) as FormObject;
};

export const getData = () => {
  return objectJson as FormObject;
};

// export const getConfiguration = () => {
//   return configJson; //type this later...
// };
