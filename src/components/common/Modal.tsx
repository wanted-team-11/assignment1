import styled from "styled-components";

type ModalProps = {
  onClose: any;
  content: any;
};

const Modal = ({ onClose, content }: ModalProps) => {
  return (
    <Background onClick={onClose}>
      <Content>{content}</Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;

  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;

const Content = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
