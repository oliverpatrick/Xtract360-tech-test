import { assocPath } from "ramda";
import { MyObject } from "../types/types";
import objectJson from "../object.json";
import configJson from "../configurationToImplement.json";

export const setDeep = (
  obj: MyObject,
  path: string,
  value: string
): MyObject => {
  return assocPath(path.split("."), value)(obj) as MyObject;
};

export const getData = () => {
  return objectJson as MyObject;
};

export const getConfiguration = () => {
  return configJson; //type this later...
};
