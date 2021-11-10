import React from "react";
import { useStore } from "../../contexts/Store";
import ArticleCard from "../ArticleCard";
import { ArticleList, LoadMoreWrapper, Button } from "./styled-components";

const Articles = () => {
  const { articles, loadMoreArticles, featuredArticle } = useStore();

  const handleClick = () => {
    loadMoreArticles();
  };

  return (
    <>
      <ArticleList>
        {featuredArticle && (
          <ArticleCard
            {...{
              title: featuredArticle.fields.title,
              category: featuredArticle.fields.category,
            }}
          />
        )}
        {articles.map((article) => {
          const {
            fields: { author, category, content, date, featured, title },
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

export default Articles;
