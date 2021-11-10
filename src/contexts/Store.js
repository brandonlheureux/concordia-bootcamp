import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  // ---- ---- ---- Functions

  // extracts featured article based on date
  const getFeaturedFrom = (articleList) => {
    // get all featured
    const featured = articleList.filter((article) => article.fields.featured);

    // reduce to newest or null (falsy)
    const latestFeatured = featured
      ? featured.reduce((current, next) =>
          new Date(current.fields.date) > new Date(next.fields.date)
            ? current
            : next
        )
      : null;

    return latestFeatured;
  };

  // initial loader
  const loadInitialArticles = async () => {
    const allArticles = await getAllArticles();
    const featured = getFeaturedFrom(allArticles);
    if (featured) {
      setFeaturedArticle(featured);
      setArticles(
        allArticles.filter((article) => article.sys.id !== featured.sys.id)
      );
    } else {
      setArticles(allArticles);
    }
  };

  // load more articles, checking for featured if it wasn already set
  const loadMoreArticles = async () => {
    const newArticles = await getAllArticles(
      6,
      articles.length + !!featuredArticle
    );

    // if no featured, attempt to find one
    if (!featuredArticle) {
      const featured = getFeaturedFrom(newArticles);

      // if found
      if (featured) {
        setFeaturedArticle(featured);
        setArticles(
          newArticles.filter((article) => article.sys.id !== featured.sys.id)
        );
      } else {
        setArticles((articles) => [...articles, ...newArticles]);
      }
    } else {
      setArticles((articles) => [...articles, ...newArticles]);
    }
  };

  // ---- ---- ---- Effects

  // on app start
  useEffect(() => {
    loadInitialArticles();

    // eslint-disable-next-line
  }, []);

  return (
    <StoreContext.Provider
      value={{
        featuredArticle,
        articles,
        loadMoreArticles,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
