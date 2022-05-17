import React, { useState } from "react";

type IProps = {
  textInput: string;
  onChange?: any;
  onBlur?: any;
  name?: string;
  values?: string;
};

export const InputDoubleClick = ({ textInput }: IProps) => {
  const [toggle, setToggle] = useState(true);

  const [text, setText] = useState(textInput);

  function handleChange(event: any) {
    setText(event.target.value);
  }

  return (
    <div>
      {toggle ? (
        <p
          onDoubleClick={() => {
            setToggle(false);
          }}
        >
          {text}
        </p>
      ) : (
        <input
          type="text"
          value={`${text}`}
          onChange={handleChange}
          onKeyDown={(event: any) => {
            if (event.key === "Enter" || event.key === "Escape") {
              setToggle(true);
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        />
      )}
    </div>
  );
};
