import React, { useState } from "react";
import { Input } from "styles";

export const InputDoubleClick = (children: string) => {
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState("test");

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
        <Input
          type="text"
          value={children}
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
