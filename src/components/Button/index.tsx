import * as C from "./styles";
import type { Component } from "solid-js";

export type IButton = {
  color?: string;
  className?: string;
};

const Button: Component<IButton> = (props: IButton) => {
  return (
    <C.Wrapper>
      <C.Button className={props.className} color={props.color}>
        Save
      </C.Button>
    </C.Wrapper>
  );
};

export default Button;
