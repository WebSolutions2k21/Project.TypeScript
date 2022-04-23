import styled from "styled-components";

import text from "assets/text.png";
import password from "assets/password.png";
import eye from "assets/eye.svg";
import eyeHide from "assets/eyeHide.svg";
import line from "assets/line.png";
import navlink from "assets/navLink.svg";
import modalIcon from "assets/modalIcon.png";
import project from "assets/project.png";
import student from "assets/studentVector.svg";

export const IconText = styled.img.attrs({
  src: `${text}`,
})``;

export const IconPassword = styled.img.attrs({
  src: `${password}`,
})``;

export const IconEye = styled.img.attrs({
  src: `${eye}`,
})``;

export const IconEyeHide = styled.img.attrs({
  src: `${eyeHide}`,
})``;

export const Line = styled.img.attrs({
  src: `${line}`,
})`
  padding: 0 10px;
`;

export const Navlink = styled.img.attrs({
  src: `${navlink}`,
})`
  padding-right: 14px;
`;

export const IconProject = styled.img.attrs({
  src: `${project}`,
})``;

export const IconStudent = styled.img.attrs({
  src: `${student}`,
})``;

export const IconInModal = styled.img.attrs({
  src: `${modalIcon}`,
})``;
