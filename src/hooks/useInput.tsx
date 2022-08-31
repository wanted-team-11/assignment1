import { useState, ChangeEvent, useRef } from "react";

const useInput = (initailValue: string) => {
  const [value, setValue] = useState(initailValue);
  const ref = useRef<HTMLInputElement>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue("");

  return { value, setValue, onChange, reset, ref };
};

export default useInput;
