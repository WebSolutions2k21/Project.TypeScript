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
  ChildrenButtons,
} from "./Modal.style";

interface IModal {
  children: any;
  title: string;
  buttonText: string;
  childrenButton: string;
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
            <CloseBtn onClick={toggleModal} />
            <ModalTitle>
              <IconInModal />
              {title}
            </ModalTitle>
            <ModalContent>{children}</ModalContent>
            <ChildrenButtons onClick={toggleModal}>{childrenButton}</ChildrenButtons>
          </ModalBox>
        </ModalStyle>
      )}
    </>
  );
};
