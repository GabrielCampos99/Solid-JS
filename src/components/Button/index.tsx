import { Component } from "solid-js";
import * as C from "./styles";

export type IButton = {
  color?: string;
};

const Button: Component<IButton> = (props) => {
  return (
    <C.Wrapper color={props.color}>
      <C.Button>Comprar</C.Button>
    </C.Wrapper>
  );
};

export default Button;
