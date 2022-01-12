import * as C from "./styles";

export type IButton = {
  color?: string;
};

const Button = ({ color = "primary" }: IButton) => {
  return (
    <C.Wrapper color={color}>
      <C.Button>Comprar</C.Button>
    </C.Wrapper>
  );
};

export default Button;
