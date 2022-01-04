import type { Component } from "solid-js";
import Button from "./components/Button";

import { GlobalStyles } from "./styles/globalStyles";
const App: Component = () => {
  return (
    <div>
      <GlobalStyles />
      <Button />
    </div>
  );
};

export default App;
