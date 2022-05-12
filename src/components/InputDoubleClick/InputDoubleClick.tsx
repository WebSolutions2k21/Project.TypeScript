import React, { useState } from "react";

export const InputDoubleClick = () => {
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
        <input
          type="text"
          value={text}
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
