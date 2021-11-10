import React from "react";
import { useStore } from "../../contexts/Store";
import Article from "../Article";
import { ArticleList } from "./styled-components";

const Articles = () => {
  const { articles } = useStore();

  return (
    <ArticleList>
      {articles.map((article) => {
        const {
          fields: { author, category, content, date, featured, title },
          sys: { id },
        } = article;
        return <Article key={id} {...{ title, category }} />;
      })}
    </ArticleList>
  );
};

export default Articles;
