import { JSX } from "solid-js/jsx-runtime";
import { css, styled } from "solid-styled-components";
import { IButton } from ".";

export const Wrapper = styled("div")``;

export const Button = styled("button")`
  font-family: ${(props) => props.theme.family};
  background-color: ${(props) => props.theme.colors[props.color!]};

  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BtnNormal = css({ padding: "1em 3em;", margin: "40px;" });

export const BtnLarge = css({ padding: "2em 6em;", margin: "80px;" });

export const BtnLargeWithBackgroundBlue = css({
  padding: "2em 6em;",
  margin: "80px;",
  backgroundColor: "blue",
});

export const BtnBorder = css({
  border: "1px solid red",
  borderRadius: "1.5rem",
});
