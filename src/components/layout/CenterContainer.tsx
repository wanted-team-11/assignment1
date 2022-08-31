import { ReactNode } from "react";
import styled from "styled-components";

type props = { children: ReactNode };

const CenterContainer = ({ children }: props) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};

export default CenterContainer;

const S: any = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

S.Wrapper = styled.div`
  max-width: 50rem;
`;
