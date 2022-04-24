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
import lineNav from "assets/lineNav.svg";
import userAvatar from "assets/userAvatar.svg";
import hatMain from "assets/hatMain.svg";
import BrainCodeMain from "assets/BrainCodeMain.svg";
import Teacher from "assets/Teacher.svg";
import page404 from "assets/page404.svg";
import teacherSmall from "assets/teacherSmall.svg";
import hatMainSmall from "assets/hatMainSmall.svg";

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
export const Navline = styled.img.attrs({
  src: `${lineNav}`,
})``;
export const UserAvatar = styled.img.attrs({
  src: `${userAvatar}`,
})``;
export const HatMain = styled.img.attrs({
  src: `${hatMain}`,
})``;
export const BraincodeMain = styled.img.attrs({
  src: `${BrainCodeMain}`,
})``;
export const TeacherMain = styled.img.attrs({
  src: `${Teacher}`,
})``;
export const Page404 = styled.img.attrs({
  src: `${page404}`,
})``;
export const TeacherSmall = styled.img.attrs({
  src: `${teacherSmall}`,
})``;
export const HatMainSmall = styled.img.attrs({
  src: `${hatMainSmall}`,
})``;
