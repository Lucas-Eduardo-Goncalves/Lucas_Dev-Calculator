import { useState } from "react";
import { CalculatorButton } from "../CalculatorButton";

import { 
  AreaCount, 
  AreaNumbers, 
  CalcButton, 
  ClearButton, 
  Container, 
  EqualButton, 
  Header, 
  IndicationArea
} from "./styles";

type IHandleEventProps = number | "+" | "-" | "/" | "*";

export function Calculator() {
  const [calcState, setCalcState] = useState("");

  function handleConcatCalcState(event: IHandleEventProps) {
    if(typeof event === "number") {
      setCalcState(lastState => lastState + `${event}`);
    } else {
      setCalcState(lastState => lastState + ` ${event} `);
    }
  }

  function handleCalculator() {
    setCalcState(eval(calcState));
  }

  return (
    <Container>
      <Header>
        <span>{calcState}</span>
      </Header>

      <AreaCount>
        <AreaNumbers>
          <ClearButton onClick={() => setCalcState("")}>AC</ClearButton>
          <CalculatorButton text="8" onClick={() => handleConcatCalcState(8)} />
          <CalculatorButton text="9" onClick={() => handleConcatCalcState(9)} />
          <CalculatorButton text="7" onClick={() => handleConcatCalcState(7)} />
          <CalculatorButton text="6" onClick={() => handleConcatCalcState(6)} />
          <CalculatorButton text="5" onClick={() => handleConcatCalcState(5)} />
          <CalculatorButton text="4" onClick={() => handleConcatCalcState(4)} />
          <CalculatorButton text="3" onClick={() => handleConcatCalcState(3)} />
          <CalculatorButton text="2" onClick={() => handleConcatCalcState(2)} />
          <CalculatorButton text="1" onClick={() => handleConcatCalcState(1)} />
          <CalculatorButton text="0" onClick={() => handleConcatCalcState(0)} />
          <EqualButton onClick={handleCalculator}>=</EqualButton>
        </AreaNumbers>

        <IndicationArea>
          <CalcButton onClick={() => handleConcatCalcState("/")}>/</CalcButton>
          <CalcButton onClick={() => handleConcatCalcState("*")}>*</CalcButton>
          <CalcButton onClick={() => handleConcatCalcState("+")}>+</CalcButton>
          <CalcButton onClick={() => handleConcatCalcState("-")}>-</CalcButton>
        </IndicationArea>
      </AreaCount>
    </Container>
  );
}
