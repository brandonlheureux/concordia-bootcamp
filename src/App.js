import GlobalStyle from "./base-styles";

import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import PaginatedArticleList from "./components/PaginatedArticleList";
import FeaturedArticle from "./components/FeaturedArticle";

function App() {
  const { featuredArticle } = useStore();

  return (
    <>
      <GlobalStyle />
      <Main className="App">
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Expand>
          <Container style={{ minHeight: "100%" }}>
            <Title>Blog</Title>
            {featuredArticle && <FeaturedArticle article={featuredArticle} />}
            <PaginatedArticleList />
          </Container>
        </Expand>

        <Footer />
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

const Title = styled.h1`
  margin: 10px 0;
  font-size: 60px;
`;
