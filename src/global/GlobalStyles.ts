import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-width: 100vw;
    min-height: 100vh;

    background-color: #B7C0EE;
  }

  *, input, button {
    font-family: "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;