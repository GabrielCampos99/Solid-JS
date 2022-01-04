import * as C from "./styles";

type IButton = {
  size?: "small" | "medium" | "large";
};

const Button = ({ size = "medium" }: IButton) => {
  return (
    <C.Wrapper size={size}>
      <C.Button>Comprar</C.Button>
    </C.Wrapper>
  );
};

export default Button;
