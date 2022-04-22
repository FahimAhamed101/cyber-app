import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
  font-family: 'VT323', monospace;
  color: white;

  background: #000;

  display: flex;
  justify-content: center;
width: 100vw;
  scroll-behavior: smooth;
}



a {
  color: inherit;
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button, a {
  cursor: pointer;
}

#__next {
  width: 100%;
}
`;
