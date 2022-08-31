import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { fetchLogin, fetchSignUp } from "../../../services/api/authAPI";
import { UseInputProps } from "../../../hooks/useInput";
import PATH from "../../../router/routerPath";

type InputProps = {
  email: UseInputProps;
  password: UseInputProps;
  passwordCheck: UseInputProps;
};

const useAuth = (inputProps: InputProps) => {
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchLogin({
      email: inputProps.email.value,
      password: inputProps.password.value,
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
      email: inputProps.email.value,
      password: inputProps.password.value,
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

  return {
    handleLogin,
    handleSignup,
  };
};

export default useAuth;
