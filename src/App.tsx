import "./styles/styles.css";

import StaticForm from "./StaticForm";
import { getData } from "./utilities/getAndSetData";
import config from "./configurationToImplement.json";
import DynamicForm from "./DynamicForm";
import CurrencyInput from "./components/inputs/CurrencyInput";
import NumericInput from "./components/inputs/NumericInput";
import { useState } from "react";
import SelectMenu from "./components/inputs/SelectInput";
import TextInput from "./components/inputs/TextInput";
import FormRenderer from "./components/FormRenderer";

export default function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(100);
  const [number, setNumber] = useState<number>(50);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("");

  const handleTextChange = (newValue: string) => {
    setTextValue(newValue);
  };

  const handleSelectChange = (newValue: string) => {
    setSelectedOption(newValue);
  };

  return (
    <div className="App">
      {/* <h1>Static Renderer</h1> */}
      {/* <StaticForm object={getData()} /> */}
      {/* <DynamicForm object={getData()} /> */}
      <CurrencyInput
        label="Trade Value"
        value={amount}
        currency={currency}
        currencies={["USD", "EUR", "GBP"]}
        onCurrencyChange={(c) => setCurrency(c)}
        onValueChange={(a) => setAmount(a)}
        min={0}
        max={1000000}
      />

      <NumericInput
        label="Enter a number"
        value={number}
        min={10}
        max={100}
        step={5}
        onValueChange={(newValue) => setNumber(newValue)}
      />

      <SelectMenu
        label="Select a vehicle"
        value={selectedOption}
        options={["Car", "Van", "Motorbike"]}
        onValueChange={handleSelectChange}
      />

      <TextInput
        label="Your Name"
        value={textValue}
        placeholder="Enter your name"
        onValueChange={handleTextChange}
      />

      <FormRenderer configuration={config} />
    </div>
  );
}
