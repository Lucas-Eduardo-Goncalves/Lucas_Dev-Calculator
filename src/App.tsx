import { Calculator } from "./components/Calculator";

import { GlobalStyles, Container } from "./global";
import { Footer } from "./global/Footer";

export function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Calculator />
        <Footer>
          &copy;Lucas Gonçalves - MIT Licence - 10/05/2022
        </Footer>
      </Container>
    </> 
  );
}
