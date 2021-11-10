import React from "react";
import { useStore } from "../../contexts/Store";
import ArticleCard from "../ArticleCard";
import { ArticleList, LoadMoreWrapper, Button } from "./styled-components";

const PaginatedArticleList = () => {
  const { articles, loadMoreArticles } = useStore();

  const handleClick = () => {
    loadMoreArticles();
  };

  return (
    <>
      <ArticleList>
        {articles.map((article) => {
          const {
            fields: { category, title },
            sys: { id },
          } = article;
          return <ArticleCard key={id} {...{ title, category }} />;
        })}
        <LoadMoreWrapper>
          <Button onClick={handleClick} aria-label="load more articles">
            Load More
          </Button>
        </LoadMoreWrapper>
      </ArticleList>
    </>
  );
};

export default PaginatedArticleList;
