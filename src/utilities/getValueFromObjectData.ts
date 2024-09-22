/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormObject } from "../types/formObject";
// import { getData } from "./getAndSetData";

export const getValueFromObjectData = (path: string, data: FormObject): any => {
  const itemPath = path.split(".");
  let value: any = data;

  for (const key of itemPath) {
    value = value?.[key];
    if (value === undefined) break;
  }
  return value;
};
