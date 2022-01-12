import type { Component } from "solid-js";
import { ThemeProvider } from "solid-styled-components";

import Button from "./components/Button";
import { GlobalStyles } from "./styles/globalStyles";
import theme from "./styles/theme";

const App: Component = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button color="secondary" />
      </ThemeProvider>
    </div>
  );
};

export default App;
