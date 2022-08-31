import { useState } from "react";
import Input from "../common/Input";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import Toast from "../common/Toast";

const Signup = () => {
  const {
    isValidEmail,
    isValidPassword,
    isValidPasswordCheck,
    inputEmail,
    inputPassword,
    inputPasswordCheck,
    handleSignup,
  } = useAuth();

  const [isFailedSignup, setIsFailedSignup] = useState(false);

  return (
    <>
      {isFailedSignup && (
        <Toast
          message="회원 가입에 실패했습니다."
          state={isFailedSignup}
          setState={setIsFailedSignup}
        />
      )}
      <h2>Sign Up</h2>
      <form name="signup" onSubmit={(e) => handleSignup(e, setIsFailedSignup)}>
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
        <S.Input
          type="password"
          id="passwordCheck"
          placeholder="password check"
          {...inputPasswordCheck}
          isValid={isValidPasswordCheck}
          invalidMessage="비밀번호와 일치하게 입력해주세요"
          required
        />
        <button
          type="submit"
          disabled={
            !inputEmail.value ||
            !inputPassword.value ||
            !inputPasswordCheck.value ||
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
