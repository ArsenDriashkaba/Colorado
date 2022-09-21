import { useState } from "react";
import { InputChangeEvent } from "@progress/kendo-react-inputs";

interface HandleInputChangeHook {
  inputValue: string;
  handleChange: (event: InputChangeEvent) => void;
}

const useInputChange = (value: string): HandleInputChangeHook => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (event: InputChangeEvent): void => {
    const name: string = event.target.value?.toString() || "";

    setInputValue(name);
  };

  return { inputValue, handleChange };
};

export default useInputChange;
