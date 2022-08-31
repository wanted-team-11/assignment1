import Login from "../../components/auth/Login";
import { Link } from "react-router-dom";
import PATH from "../../router/routerPath";
import CenterContainer from "../../components/layout/CenterContainer";
import styled from "styled-components";
import Header from "../../components/layout/Header";

const LoginPage = () => {
  return (
    <>
      <Header />
      <CenterContainer>
        <Login />
        <span>회원이 아니라면? </span>
        <Link to={PATH.SIGNUP}>
          <S.SignupLink>회원가입하기</S.SignupLink>
        </Link>
      </CenterContainer>
    </>
  );
};

export { LoginPage };

const S: any = {};

S.SignupLink = styled.span`
  display: inline-block;
  margin-top: 2rem;
`;
