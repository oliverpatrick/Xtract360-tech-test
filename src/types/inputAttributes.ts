interface BaseFieldConfig {
  type: "textInput" | "enumInput" | "integerInput" | "currencyInput";
  label: string;
  path: string;
}

interface TextInputConfig extends BaseFieldConfig {
  type: "textInput";
  defaultValue?: string;
}

interface EnumInputConfig extends BaseFieldConfig {
  type: "enumInput";
  values: string[];
  defaultValue?: string;
}

interface IntegerInputConfig extends BaseFieldConfig {
  type: "integerInput";
  min: number;
  max: number;
  defaultValue?: number;
}

interface CurrencyInputConfig extends BaseFieldConfig {
  type: "currencyInput";
  currencies: string[];
  min?: number;
  max?: number;
  defaultValue?: 0;
}

export type FieldConfig =
  | TextInputConfig
  | EnumInputConfig
  | IntegerInputConfig
  | CurrencyInputConfig;

export type FormConfiguration = FieldConfig[];
