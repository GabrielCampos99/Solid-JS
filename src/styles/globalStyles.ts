import { createGlobalStyles } from "solid-styled-components";

export const GlobalStyles = () => {
  const Styles = createGlobalStyles`
    html,
    body {
      background: #808080;
    }

    * {
      box-sizing: border-box;
    }
  `;
  return <Styles />;
};
