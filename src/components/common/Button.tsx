import styled, { css } from "styled-components";

export const Button = styled.button<{ isReversal?: boolean }>`
  border: 0;
  border-radius: 2px;
  width: 3rem;
  height: 2rem;
`;

export const RedButton = styled(Button)`
  background-color: #d32f2f;
  color: #ffffff;
`;

export const BlueButton = styled(Button)`
${({ isReversal }) =>
  !isReversal
    ? css`
        background-color: #1976d2;
        color: #ffffff;
      `
    : css`
        border: 1px solid #1976d2;
        background-color: #ffffff;
        color: #1976d2;
      `}}
`;

export const GreenButton = styled(Button)`
  background-color: #2e7d32;
  color: #ffffff;
`;
