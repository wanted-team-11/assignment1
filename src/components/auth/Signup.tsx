import Input from "../common/Input";
import styled from "styled-components";

import useAuth from "./hooks/useAuth";
import useAuthInputs from "./hooks/useAuthInputs";
import useValid from "./hooks/useValid";

const Signup = () => {
  const inputProps = useAuthInputs();
  const { isValidEmail, isValidPassword, isValidPasswordCheck } = useValid({
    ...inputProps,
  });
  const { handleSignup } = useAuth({ ...inputProps });

  return (
    <>
      <h2>Sign Up</h2>
      <form name="signup" onSubmit={handleSignup}>
        <S.Input
          type="email"
          {...inputProps.email}
          isValid={isValidEmail}
          invalidMessage="@를 포함한 이메일을 입력해주세요"
          required
        />
        <S.Input
          type="password"
          {...inputProps.password}
          isValid={isValidPassword}
          invalidMessage="8자 이상의 비밀번호를 입력해주세요"
          required
        />
        <S.Input
          type="password"
          id="passwordCheck"
          placeholder="password check"
          {...inputProps.passwordCheck}
          isValid={isValidPasswordCheck}
          invalidMessage="비밀번호와 일치하게 입력해주세요"
          required
        />
        <button
          type="submit"
          disabled={
            !inputProps.email.value ||
            !inputProps.password.value ||
            !inputProps.passwordCheck.value ||
            !isValidEmail ||
            !isValidPassword ||
            !isValidPasswordCheck
          }
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Signup;

const S: any = {};

S.Input = styled(Input)`
  margin-bottom: 1rem;
`;
