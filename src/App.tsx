import type { Component } from "solid-js";
import Logo from "./components/Button";
import { GlobalStyles } from "./styles/globalStyles";
const App: Component = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
    </div>
  );
};

export default App;
