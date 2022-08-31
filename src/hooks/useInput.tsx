import { useState, ChangeEvent, useRef } from "react";

export interface UseInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  ref: React.MutableRefObject<HTMLInputElement | undefined>;
}

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
