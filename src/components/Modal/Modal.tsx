import React, { useState } from "react";
import { IconInModal } from "styles";

import {
  ModalStyle,
  ModalBox,
  ModalTitle,
  CloseBtn,
  ModalContent,
  ModalOverlay,
  ActiveModal,
  ModalButton,
  ChildrenButton,
} from "./Modal.style";

interface IModal {
  children: any;
  title: string;
  buttonText: string;
  childrenButton?: string;
}

export const Modal = ({ children, title, buttonText, childrenButton }: IModal) => {
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
            <ModalTitle>
              <IconInModal />
              {title}
            </ModalTitle>
            <ModalContent>{children}</ModalContent>
            <ChildrenButton onClick={toggleModal}>{childrenButton}</ChildrenButton>
          </ModalBox>
        </ModalStyle>
      )}
    </>
  );
};
