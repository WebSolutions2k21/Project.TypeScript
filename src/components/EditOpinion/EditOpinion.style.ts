import styled from "styled-components";
import { Button, Arrow, Bin } from "styles";
import { AddNewProjectForm } from "./../AddNewProject/Form.style";

export const EditOpinionForm = styled(AddNewProjectForm)``;

export const ArrowBtn = styled.div`
  border: none;
  background-color: transparent;
  // display: inline;
  margin: 0 15px;
  // position: absolute;
  // top: 50%;
  // transform: translateY(-50%);
  display: block;
  width: 50px;
  height: 50px;
`;

export const ArrowIco = styled(Arrow)`
  height: 20px;
  width: 20px;
  backgroud-color: blue;
`;

export const BinButton = styled(Button)`
  width: 25px;
  height: 25px;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  //   display: none;
`;

export const BinIco = styled(Bin)``;

export const ButtonStyle = styled(Button)`
  text-transform: uppercase;
  border: #c4c4c4;
  width: 50px;
  height: 25px;
  font-size: 14px;
  display: block;
  // display: inline;
  margin: 10px;
  margin-left: auto;
  // right: 45px;
  // top: 50%;
  // transform: translateY(-50%);
  // position: absolute;
  // display: none;
`;

export const ButtonSave = styled(ButtonStyle)`
  display: inline;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 85px;
  transform: translateY(-50%);
  //   display: none;
`;

// do poprawy
