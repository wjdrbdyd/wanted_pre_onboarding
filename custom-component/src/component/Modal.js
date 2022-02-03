import React, { useState } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const ModalButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.buttonColor};
  color: white;
  padding: 20px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow};
  text-shadow: ${(props) => props.theme.textShadow};
`;
const ModalBackground = styled.div`
  position: absolute;
  width: 101%;
  height: 101%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
`;
const ModalBox = styled.div`
  background-color: white;
  height: 100px;
  width: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 26%;
  border-radius: 15px;
`;
const ModalClosedButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  padding: 0;
`;
const ModalContents = styled.span`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const Modal = () => {
  const [modalView, setModalView] = useState(false);
  const onModal = () => {
    setModalView((prev) => !prev);
  };
  return (
    <ModalWrapper>
      <ModalButton onClick={onModal}>Open Modal</ModalButton>

      {modalView ? (
        <>
          <ModalBackground />
          <ModalBox>
            <ModalClosedButton onClick={onModal}>x</ModalClosedButton>
            <ModalContents>HELLO CODESTATES!</ModalContents>
          </ModalBox>
        </>
      ) : null}
    </ModalWrapper>
  );
};

export default Modal;
