import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Ubuntu:wght@300&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  background: linear-gradient(180deg, rgba(164, 205, 215, 0) 0%, #3C789E 100%);
  background-repeat: no-repeat;
  font-family: 'Maven Pro', sans-serif;
  font-size: 1.15em;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
`;

export const theme = {
  colors: {
    primary: "#d9248f",
    warning: "#FF0000",
    text: "#174C6F",
    body: "#fff",
    cards: "rgba(255, 255, 255, 0.8)",
  },
};
