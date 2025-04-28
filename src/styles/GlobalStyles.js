import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 1.6;
    background-color:rgb(10, 10, 10);
    color: #fff;
  }
`;

export default GlobalStyles;
