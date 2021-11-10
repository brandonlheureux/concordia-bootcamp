import React from "react";
import {
  Title,
  Image,
  Category,
  CategoryWrapper,
  ArticleContainer,
  ImageWrapper,
  Center,
} from "./styled-components";

const ArticleCard = ({ title, category }) => {
  return (
    <ArticleContainer tabIndex="0" aria-label="Article">
      {/* wrappers to place elements, center to fill the space and center the title */}
      <ImageWrapper>
        <Image
          src="/placeholder.jpg"
          aria-label="Article Image"
          alt="placeholder image for article card"
        />
      </ImageWrapper>
      <Center>
        <Title tabIndex="0" aria-label="Article Title">
          {title}
        </Title>
      </Center>
      <CategoryWrapper>
        <Category tabIndex="0" aria-label="Article Category">
          {category}
        </Category>
      </CategoryWrapper>
    </ArticleContainer>
  );
};

export default ArticleCard;
