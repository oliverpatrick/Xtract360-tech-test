export type ConfigItem = {
  type: string;
  label: string;
  path: string;
  defaultValue?: string | number;
  required?: boolean;
  values?: string[];
  min?: number;
  max?: number;
  currencies?: string[];
};

export type ConfigJson = ConfigItem[];
