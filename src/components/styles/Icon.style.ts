import styled from "styled-components";
import text from '../../assets/text.png';
import password from '../../assets/password.png'
import eye from '../../assets/eye.svg'
import eyeHide from '../../assets/eyeHide.svg'

export const IconText = styled.img.attrs({
  src: `${text}`
})`
`;

export const IconPassword = styled.img.attrs({
  src: `${password}`
})`
`;

export const IconEye = styled.img.attrs({
  src: `${eye}`
})`
`;

export const IconEyeHide = styled.img.attrs({
  src: `${eyeHide}`
})`
`;