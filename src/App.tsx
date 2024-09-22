import "./styles/styles.css";

// import StaticForm from "./StaticForm";
import { getConfiguration } from "./utilities/getConfiguration";
import { FieldConfig } from "./types/inputAttributes";
import FormBuilder from "./components/FormBuilder";

export default function App() {
  const configuration: FieldConfig[] = getConfiguration();

  return (
    <div className="App">
      <FormBuilder configuration={configuration} />
    </div>
  );
}
