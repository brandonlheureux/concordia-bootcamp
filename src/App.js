import GlobalStyle from "./base-styles";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Articles from "./components/Articles";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main className="App">
        {/* <Router> */}
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Expand>
          <Container style={{ minHeight: "100%" }}>
            {/* <FeaturedArticle /> */}
            {/* <Routes>
                <Route path="/page/:pageNumber" element={} />
              </Routes> */}
            <Articles />
          </Container>
        </Expand>

        <Footer />
        {/* </Router> */}
      </Main>
    </>
  );
}

export default App;

// this will make the main content expand to take the rest of the space between header and footer
// sticks footer at the bottom

const Expand = styled.div`
  flex-grow: 1;
`;

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
