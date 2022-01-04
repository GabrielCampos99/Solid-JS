import type { Component } from "solid-js";
import * as C from "./styles";

const Button: Component = () => {
  return (
    <C.Wrapper>
      <C.Button>Comprar</C.Button>
    </C.Wrapper>
  );
};

export default Button;
