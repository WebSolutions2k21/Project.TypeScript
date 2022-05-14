import styled from "styled-components";
import { Button, CloseButton } from "styles";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index:1;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 80vw;
  max-width: 375px;
  padding: 30px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  cursor: auto;
`;

export const ModalTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary || "#FFFFFF"};
  border-style: none none solid none;

  & > img {
    padding-right: 10px;
  }
`;

export const ModalContent = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
`;

export const CloseBtn = styled(CloseButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-out;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const ActiveModal = styled.div`
  overflow-y: hidden;
`;

export const ModalButton = styled(Button)`
  height: 30px;
  width: 50px;
  font-size: 14px;
  margin: 10px 0px 5px 0px;
`;

export const ChildrenButtons = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;
