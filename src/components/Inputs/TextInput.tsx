import React, { FC, InputHTMLAttributes } from "react";
import { InputContainer } from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const TextInput: FC<InputProps> = ({
  label,
  name,
  ...props
}) => {
  return (
    <InputContainer>
      <label>{label}</label>
      <input
        id={name}
        {...props}
      />
    </InputContainer>
  );
};
