import type { Component } from "solid-js";
import { ThemeProvider } from "solid-styled-components";

import Button from "./components/Button";
import { BtnLarge, BtnNormal } from "./components/Button/styles";
import { GlobalStyles } from "./styles/globalStyles";
import theme from "./styles/theme";

const App: Component = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* In my mind, the perfect way to declare a moddifier is passing like a
      props.
      In the styles, I create a generic button, and some classes:
      BtnBorder, BtnLarge, BtnSmall... and the class moddifier the component,
      however, I think that its not a good ideia. */}
        <Button className={BtnLarge} color="secondary" />
      </ThemeProvider>
    </div>
  );
};

export default App;
