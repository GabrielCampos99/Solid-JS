import { styled, css } from "solid-styled-components";

export const Wrapper = styled("div")``;

export const Button = styled("button")`
  font-family: ${(props) => props.theme.family};
  margin: 40px;
  padding: 1em 3em;
  border-radius: 5px;
  border: none;
  background: #4169e1;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;
