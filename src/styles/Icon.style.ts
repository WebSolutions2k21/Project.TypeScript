import styled from "styled-components";
import text from "assets/text.png";
import password from "assets/password.png";
import eye from "assets/eye.svg";
import eyeHide from "assets/eyeHide.svg";
import line from "assets/line.png";
import navlink from "assets/navLink.svg";
import student from "assets/studentVector.svg";
import star from "assets/star.png";
import profilePic from "assets/profilePic.png";
import arrow from "assets/arrow.png";
import bin from "assets/bin.png";

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

export const IconStudent = styled.img.attrs({
  src: `${student}`,
})``;

export const Star = styled.img.attrs({
  src: `${star}`,
})``;

export const ProfilePic = styled.img.attrs({
  src: `${profilePic}`,
})``;

export const Arrow = styled.img.attrs({
  src: `${arrow}`,
})``;

export const Bin = styled.img.attrs({
  src: `${bin}`,
})``;