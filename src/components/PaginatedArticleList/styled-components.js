import styled from "styled-components";

export const ArticleList = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 30px;
  width: 100%;
  padding: 30px;

  @media (max-width: 740px) {
    flex-flow: column;
    align-items: center;
  }
`;

export const LoadMoreWrapper = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  margin: auto;
  display: block;
  border: solid 2px black;
  background: transparent;
  border-radius: 30px;
  padding: 20px 60px;
  cursor: pointer;
  transition: color 700ms, background-color 700ms, transform 100ms;

  font-size: 20px;

  &:hover,
  &:focus {
    background-color: black;
    color: white;
  }

  &:active {
    transform: scale(97%);
  }
`;
