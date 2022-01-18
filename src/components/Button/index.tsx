import * as C from "./styles";
import type { Component } from "solid-js";
import {
  BtnBorder,
  BtnLarge,
  BtnLargeWithBackgroundBlue,
  BtnNormal,
} from "./styles";

export type IButton = {
  color?: string;
  size?: string;
  children?: any;
};

const Button: Component<IButton> = (props: IButton) => {
  return (
    <C.Wrapper>
      <C.Button className={BtnLargeWithBackgroundBlue} color={props.color}>
        Save
      </C.Button>
    </C.Wrapper>
  );
};

export default Button;
