import React from "react";
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  Image,
  Title,
  Preview,
  ReadMore,
} from "./styled-components";

const FeaturedArticle = ({ article }) => {
  const {
    fields: { title, content },
  } = article;

  return (
    <Container aria-label="featured article">
      <ImageWrapper>
        <Image src="./placeholder.jpg" aria-label="featured article image" />
      </ImageWrapper>
      <ContentWrapper>
        <Title tabIndex="0" aria-label="featured article title">
          {title}
        </Title>
        <Preview aria-label="featured article preview contnet">
          {content}
        </Preview>
        <ReadMore tabIndex="0" aria-label="featured article read more button">
          Read More
        </ReadMore>
      </ContentWrapper>
    </Container>
  );
};

export default FeaturedArticle;
