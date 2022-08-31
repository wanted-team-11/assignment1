import Input from "../common/Input";
import styled from "styled-components";
import useAuth from "./hooks/useAuth";

const Login = () => {
  const {
    isValidEmail,
    isValidPassword,
    inputEmail,
    inputPassword,
    handleLogin,
  } = useAuth();

  return (
    <>
      <h2>Login</h2>
      <form name="login" onSubmit={handleLogin}>
        <S.Input
          type="email"
          {...inputEmail}
          isValid={isValidEmail}
          invalidMessage="@를 포함한 이메일을 입력해주세요"
          required
        />
        <S.Input
          type="password"
          {...inputPassword}
          isValid={isValidPassword}
          invalidMessage="8자 이상의 비밀번호를 입력해주세요"
          required
        />
        <button
          type="submit"
          disabled={
            !inputEmail.value ||
            !inputPassword.value ||
            !isValidEmail ||
            !isValidPassword
          }
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

const S: any = {};

S.Input = styled(Input)`
  margin-bottom: 1rem;
`;
