import { AxiosError } from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "./useInput";
import PATH from "../router/routerPath";
import { fetchLogin, fetchSignUp } from "../services/api/authAPI";

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
    fetchLogin({
      email: inputEmail.value,
      password: inputPassword.value,
    })
      .then(() => {
        navigate(PATH.TODO);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
          console.log(error);
        } else {
          alert("undefined error. check console log");
          console.log(error);
        }
      });
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSignUp({
      email: inputEmail.value,
      password: inputPassword.value,
    })
      .then(() => {
        navigate(PATH.TODO);
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("undefined error. check console log");
          console.log(error);
        }
      });
  };

  useEffect(() => {
    const checkValidEmail = () => {
      const email = inputEmail.value;
      return /@/.test(email);
    };
    if (isFirstRender.current) return;
    setIsValidEmail(checkValidEmail());
  }, [inputEmail.value]);

  useEffect(() => {
    const checkValidPassword = () => {
      const password = inputPassword.value;
      return 8 <= password.length;
    };
    if (isFirstRender.current) return;
    setIsValidPassword(checkValidPassword());
  }, [inputPassword.value]);

  useEffect(() => {
    const checkValidPasswordCheck = () => {
      const password = inputPassword.value;
      const passwordCheck = inputPasswordCheck.value;
      return password !== "" && password === passwordCheck;
    };
    if (isFirstRender.current) return;
    setIsValidPasswordCheck(checkValidPasswordCheck());
  }, [inputPassword.value, inputPasswordCheck.value]);

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
