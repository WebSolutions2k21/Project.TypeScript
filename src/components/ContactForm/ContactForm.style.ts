import styled from "styled-components";
import { Label } from "styles";

export const ContactFormContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 20px;
  min-width: 322px;
  min-height: 294px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-bottom: 20px;
`;

export const Header: any = styled.h1`
  margin: 17px 19px 0 -50px;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  font-weight: 400;
  font-size: 20px;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;
`;

export const NameDescContainer: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13px 15px 10px;
`;

export const Paragraf: any = styled.p`
  margin-left: 8.5px;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};
  font-weight: 400;
  font-size: 20px;
`;
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const LabelStyle = styled(Label)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 13px 15px 10px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.text || "#174C6F"};
  border-style: none none solid none;
  background: none;
  outline: none;
  font-size: 14px;
  width: 245px;
  height: 30px;
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.text || "#174C6F"};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text || "#174C6F"};
    text-align: right;
  }
  & > img {
    padding-right: 10px;
  }
`;
