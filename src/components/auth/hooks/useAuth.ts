import { AxiosError } from "axios";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import PATH from "../../../router/routerPath";
import { fetchLogin, fetchSignUp } from "../../../services/api/authAPI";

const useAuth = () => {
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(true);
  const isFirstRender = useRef(true);
  const inputEmail = useInput("");
  const inputPassword = useInput("");
  const inputPasswordCheck = useInput("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchLogin({
      email: inputEmail.value,
      password: inputPassword.value,
    })
      .then(() => {
        navigate(PATH.TODO);
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        switch (error.response.data.statusCode) {
          case 404: {
            return alert(errorMessage);
          }
          case 401: {
            return alert(errorMessage);
          }
          default: {
            return;
          }
        }
      });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchSignUp({
      email: inputEmail.value,
      password: inputPassword.value,
    })
      .then(() => {
        navigate(PATH.TODO);
      })
      .catch((error) => {
        const errorMessage = error.response.data.message;
        switch (error.response.data.statusCode) {
          case 400: {
            return alert(errorMessage);
          }
          case 500: {
            return alert(errorMessage);
          }
          default: {
            return;
          }
        }
      });
  };

  const checkValidEmail = () => {
    const email = inputEmail.value;
    return /@/.test(email);
  };

  const checkValidPassword = () => {
    const password = inputPassword.value;
    return 8 <= password.length;
  };

  const checkValidPasswordCheck = () => {
    const password = inputPassword.value;
    const passwordCheck = inputPasswordCheck.value;
    return password !== "" && password === passwordCheck;
  };

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidEmail(checkValidEmail());
  }, [inputEmail.value]);

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidPassword(checkValidPassword());
  }, [inputPassword.value]);

  useEffect(() => {
    if (isFirstRender.current) return;
    setIsValidPasswordCheck(checkValidPasswordCheck());
  }, [inputPasswordCheck.value]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return {
    isValidEmail,
    isValidPassword,
    isValidPasswordCheck,
    inputEmail,
    inputPassword,
    inputPasswordCheck,
    handleLogin,
    handleSignup,
  };
};

export default useAuth;
