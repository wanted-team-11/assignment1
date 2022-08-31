import styled from "styled-components";

type ModalProps = {
  onClose: any;
  content: any;
};

const Modal = ({ onClose, content }: ModalProps) => {
  return (
    <Background>
      <Content>{content}</Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 100%;
  width: 950px;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: #141414;
`;
