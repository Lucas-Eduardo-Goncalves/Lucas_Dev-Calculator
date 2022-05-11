import { Container } from "./styles";

interface ICalculatorButtonProps {
  text: string;
  onClick?: () => void;
}

export function CalculatorButton({ text, onClick }: ICalculatorButtonProps) {
  return (
    <Container onClick={onClick}>
      {text}
    </Container>
  );
}