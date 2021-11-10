import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  justify-content: space-between;

  margin: 30px auto;
  padding: 30px 0;
  border-top: solid 5px black;
  border-bottom: solid 5px black;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1px;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  @media (min-width: 600px) {
    width: calc(50% - 30px);
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 20px;
  align-items: flex-start;

  @media (min-width: 600px) {
    width: calc(50% - 30px);
  }
`;

export const Title = styled.h1`
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export const Preview = styled.p``;

export const ReadMore = styled.button`
  background-color: transparent;
  border: none;
  display: block;

  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;
