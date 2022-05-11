import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 1rem;
  margin: 1rem 2rem;

  border-radius: 0.5rem;
  background-color: #FFFFFF;
`;

export const Header = styled.header`
  height: 5rem;
  background-color: #D5DCFF;
  border-radius: 0.5rem;
  
  display: flex;
  align-items: center;

  padding: 1rem;

  span {
    color: #000000;

    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const AreaCount = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const AreaNumbers = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const EqualButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;

  color: #FFFFFF;
  background-color: #7067CF;

  font-size: 1.2rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;

  color: #FFFFFF;
  background-color: #7B287D;

  font-size: 1.2rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const IndicationArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const CalcButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 5rem;
  width: 5rem;

  border: none;
  border-radius: 0.5rem;

  color: #FFFFFF;
  background-color: #7067CF;

  font-size: 1.2rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
