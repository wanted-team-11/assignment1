import React from "react";
import styled, { keyframes } from "styled-components";

interface toastType {
  message: string;
}

const Toast = ({ message }: toastType) => {
  return (
    <Background>
      <ToastBox>
        <p>{message}</p>
      </ToastBox>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100%;
`;
const fadeIn = keyframes`
from {
  opacity:0; }
to{
    opacity:1;
}
`;
const fadeOut = keyframes`
from {
  opacity:1; }
to{
    opacity:0;
}
`;
const ToastBox = styled.div`
  flex-direction: "row";
  position: absolute;
  border-radius: 20px;
  min-width: "250px";
  height: "70px";
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: "13px";
  margin: "auto";
  padding: 0 30px;
  font-weight: 500;
  word-break: keep-all;
  visibility: visible;
  animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1s;
  -webkit-animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 1s;
  animation-fill-mode: forwards;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

export default Toast;
