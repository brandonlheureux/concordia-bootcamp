import React from "react";
import { useStore } from "../../contexts/Store";
import ArticleCard from "../ArticleCard";
import {
  ArticleList,
  LoadMoreWrapper,
  Button,
  FiltersWrapper,
  FilterButton,
} from "./styled-components";

const CATEGORIES = [
  "all",
  "Health and Wellness",
  "Product Updates",
  "For Organizations",
  "Life at Dialogue",
  "News",
  "Humanizing Healthcare",
];

const PaginatedArticleList = () => {
  const { articles, loadMoreArticles, setCategory, category } = useStore();

  const handleClick = () => {
    loadMoreArticles();
  };

  return (
    // flex column
    <ArticleList>
      {/* filter area */}
      <FiltersWrapper>
        {CATEGORIES.map((categoryOption) => {
          return (
            <FilterButton
              key={categoryOption}
              onClick={() => setCategory(categoryOption)}
              currentlySelected={category === categoryOption}
            >
              {categoryOption === "all" ? "View All" : categoryOption}
            </FilterButton>
          );
        })}
      </FiltersWrapper>

      {/* article area */}
      {articles.map((article) => {
        const {
          fields: { category, title },
          sys: { id },
        } = article;
        return <ArticleCard key={id} {...{ title, category }} />;
      })}

      {/* load more articles */}
      <LoadMoreWrapper>
        <Button onClick={handleClick} aria-label="load more articles">
          Load More
        </Button>
      </LoadMoreWrapper>
    </ArticleList>
  );
};

export default PaginatedArticleList;
