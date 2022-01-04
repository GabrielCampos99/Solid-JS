import { createGlobalStyles } from "solid-styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyles`
 html {
      font-size: 62.5%;
      box-sizing: border-box;
    }
  body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
    
`;
