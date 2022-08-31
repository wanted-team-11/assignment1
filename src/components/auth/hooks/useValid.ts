import { useState, useRef, useEffect } from "react";
import { UseInputProps } from "../../../hooks/useInput";

type InputProps = {
  email: UseInputProps;
  password: UseInputProps;
  passwordCheck: UseInputProps;
};

const useValid = (inputProps: InputProps) => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(true);
  const isFirstRender = useRef(true);

  const checkValidEmail = () => {
    const email = inputProps.email.value;
    return /@/.test(email);
  };

  const checkValidPassword = () => {
    const password = inputProps.password.value;
    return 8 <= password.length;
  };

  const checkValidPasswordCheck = () => {
    const password = inputProps.password.value;
    const passwordCheck = inputProps.passwordCheck.value;
    return password !== "" && password === passwordCheck;
  };

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidEmail(checkValidEmail());
  }, [inputProps.email.value]);

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidPassword(checkValidPassword());
  }, [inputProps.password.value]);

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidPasswordCheck(checkValidPasswordCheck());
  }, [inputProps.passwordCheck.value]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return {
    isValidEmail,
    isValidPassword,
    isValidPasswordCheck,
  };
};

export default useValid;
