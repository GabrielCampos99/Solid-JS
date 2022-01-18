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
};

const Button: Component<IButton> = (props: IButton) => {
  return (
    <C.Wrapper>
      //In my mind, the perfect way to declare a moddifier is passing like a
      props. //In the styles, I create a generic button, and some classes:
      BtnBorder, BtnLarge, BtnSmall... and the class moddifier the component,
      however, I think that its not a good ideia.
      <C.Button className={BtnLargeWithBackgroundBlue} color={props.color}>
        Save
      </C.Button>
    </C.Wrapper>
  );
};

export default Button;
