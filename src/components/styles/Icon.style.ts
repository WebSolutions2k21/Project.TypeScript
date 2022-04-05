import styled from "styled-components";
import text from '../../assets/text.png'
import password from '../../assets/password.png'
import line from '../../assets/line.png'

export const IconText = styled.img.attrs({
  src: `${text}`
})`
`;

export const IconPassword = styled.img.attrs({
  src: `${password}`
})`
`;

export const Line = styled.img.attrs({
  src: `${line}`,
})`
  padding: 0 10px
`;