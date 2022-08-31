import { useState, ChangeEvent, useRef } from "react";

const useSaveValueInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue("");

  return { value, setValue, onChange, reset, ref };
};

export default useSaveValueInput;
