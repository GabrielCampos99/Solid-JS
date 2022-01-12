import { styled } from "solid-styled-components";

export const Wrapper = styled("div")``;

export const Button = styled("button")`
  font-family: ${(props) => props.theme.family};
  background-color: ${(props) => props.theme.colors[props.color!]};
  margin: 40px;
  padding: 1em 3em;
  border-radius: 5px;
  border: none;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;
