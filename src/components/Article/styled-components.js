import styled from "styled-components";

export const ArticleContainer = styled.div`
  background-color: white;
  height: 400px;
  padding-bottom: 20px;
  display: flex;
  flex-flow: column nowrap;

  transition: transform 100ms;

  /* this will set it to 2 columns, subtracting the gap so not to wrap */
  width: 100%;

  /* this will set it to 1 column on smaller displays */
  @media (min-width: 740px) {
    width: calc(50% - 30px);
  }

  &:focus,
  &:hover {
    transform: scale(100.5%);
    outline: gray 2px black;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1px;
`;

// could be a Link
export const ImageWrapper = styled.div`
  height: 200px;

  @media (min-width: 900px) {
    height: 240px;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

// should be another link
export const Title = styled.p`
  text-align: center;
  font-size: 14px;

  @media (min-width: 300px) {
    font-size: 18px;
  }
  @media (min-width: 900px) {
    font-size: 22px;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

// and another link
export const Category = styled.p`
  font-size: 10px;

  @media (min-width: 300px) {
    font-size: 12px;
  }

  @media (min-width: 500px) {
    font-size: 14px;
  }

  cursor: pointer;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
`;

export const Center = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 14px;
  flex-grow: 1;
`;
