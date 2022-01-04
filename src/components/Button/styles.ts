import { styled } from "solid-styled-components";

export const Wrapper = styled("div")``;

export const Button = styled("button")`
  margin: 40px;
  padding: 1em 3em;
  border-radius: 5px;
  border: none;
  background: #4169e1;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
