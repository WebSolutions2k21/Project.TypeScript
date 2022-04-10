import { Button } from "components/styles";
import React, { useState } from "react";

import { ModalStyle, ModalBox, ModalTitle, CloseBtn, ModalContent, ModalOverlay, ActiveModal } from "./Modal.style";

interface IModal {
  children: any;
  title: string;
}

export const Modal = ({ children, title }: IModal) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  if (isModalOpen) {
    document.body.classList.add(ActiveModal);
  } else {
    document.body.classList.remove(ActiveModal);
  }

  return (
    <>
      <Button onClick={toggleModal}>Start!</Button>
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
