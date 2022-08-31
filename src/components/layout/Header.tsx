import { Link } from "react-router-dom";
import styled from "styled-components";
import path from "../../router/routerPath";
import storage from "../../utils/storage";

const Header = () => {
  const isLogined = storage.get("TOKEN") ? true : false;

  return (
    <S.Container>
      <S.Wrapper>
        <div>
          <S.Title>Todo App</S.Title>
          <span>원티드 프리온보딩 프론트엔드 선발과제</span>
        </div>
        {isLogined ? <Link to={path.LOGOUT}>Logout</Link> : null}
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;

const S: any = {};

S.Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Wrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 50rem;
  border-bottom: 1px solid black;
  padding: 1rem;
`;

S.Title = styled.h1`
  display: inline-block;
  margin: 0 2rem 0 0;
`;
