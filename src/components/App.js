import { DataProvider } from "Context";
import routes from "Routes";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Header";

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

const Routes = styled.div`
  margin-top: 8.3rem;
  width: 100%;
  width: 100vw;
`;

const App = () => {
  return (
    <DataProvider>
      <GlobalStyle />
      <Container>
        <Header title={"Next Movies"} />
        <Routes>{routes}</Routes>
      </Container>
    </DataProvider>
  );
};

export default App;
