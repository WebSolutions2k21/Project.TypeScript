import React, { useState } from "react";

type IProps = {
  textInput: string;
  onChangeFunction?: any;
  onBlur?: any;
  name?: string;
  myValues?: string;
};

export const InputDoubleClick = ({ textInput, onChangeFunction, myValues }: IProps) => {
  const [toggle, setToggle] = useState(true);

  // const [text, setText] = useState(textInput);

  // function handleChange(event: any) {
  //   onChange ? onChange() : setText(event.target.value);
  // }

  return (
    <div>
      {toggle ? (
        <p
          onDoubleClick={() => {
            setToggle(false);
          }}
        >
          {/* {text} */}
        </p>
      ) : (
        <input
          type="text"
          value={myValues}
          onChange={onChangeFunction}
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
