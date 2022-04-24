import React, { useState } from "react";

import {
  ModalStyle,
  ModalBox,
  ModalTitle,
  CloseBtn,
  ModalContent,
  ModalOverlay,
  ActiveModal,
  ModalButton,
} from "./Modal.style";

interface IModal {
  children: any;
  title: string;
  buttonText: string;
}

export const Modal = ({ children, title, buttonText }: IModal) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  if (isModalOpen) {
    document.body.classList.add(ActiveModal);
  } else {
    document.body.classList.remove(ActiveModal);
  }

  return (
    <>
      <ModalButton onClick={toggleModal}>{buttonText}</ModalButton>
      {isModalOpen && (
        <ModalStyle>
          <ModalOverlay onClick={toggleModal} />
          <ModalBox>
            <CloseBtn onClick={toggleModal}>X</CloseBtn>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{children}</ModalContent>
          </ModalBox>
        </ModalStyle>
      )}
    </>
  );
};
