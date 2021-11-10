import styled from "styled-components";

export const ArticleList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 30px;
  width: 100%;
  padding: 30px;
  background-color: wheat;

  @media (max-width: 740px) {
    flex-flow: column;
    align-items: center;
  }
`;
