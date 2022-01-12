import * as C from "./styles";
import type { Component } from "solid-js";

export type IButton = {
  color?: string;
};

const Button: Component<IButton> = (props) => {
  return (
    <C.Wrapper>
      <C.Button color={props.color}>Comprar</C.Button>
    </C.Wrapper>
  );
};

export default Button;
