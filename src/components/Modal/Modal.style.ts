import styled from "styled-components";
import { Button } from "styles";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
  margin-top: 50px;
  color: ${({ theme }) => theme.colors.text};
  
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ActiveModal = styled.div`
  overflow-y: hidden;
`;

export const ButtonModal = styled(Button)`
height: 30px;
width: 100px;
`;