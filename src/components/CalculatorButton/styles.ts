import styled from "styled-components";

export const Container = styled.button`
  height: 5rem;
  width: 5rem;
  
  border: none;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: 600;
  
  color: #000000;
  background-color: #D5DCFF;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;