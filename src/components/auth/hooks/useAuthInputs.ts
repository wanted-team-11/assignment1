import useInput from "../../../hooks/useInput";

const useAuthInputs = () => {
  const email = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");

  return {
    email,
    password,
    passwordCheck,
  };
};

export default useAuthInputs;
