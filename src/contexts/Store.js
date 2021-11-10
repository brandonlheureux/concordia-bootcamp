import React, { useState, useEffect, useContext } from "react";
import { getAllArticles, getArticlesByCategory } from "../services/contentful";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("all");


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

  // load more articles, checking for featured if it wasnt already set
  // category aware
  const loadMoreArticles = async () => {
    let newArticles;
    if (category === "all") {
      newArticles = await getAllArticles(
        6,
        articles.length + !!featuredArticle
      );
    } else {
      newArticles = await getArticlesByCategory(
        6,
        articles.length + !!featuredArticle,
        category
      );
    }

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
    (async () => {
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
    })();

    // eslint-disable-next-line
  }, []);

  // fetch new list based on selected category
  useEffect(() => {
    (async () => {
      let newArticleList;
      if (category === "all") {
        newArticleList = await getAllArticles();
      } else {
        newArticleList = await getArticlesByCategory(6, 0, category);
      }
      if (!featuredArticle) {
        const newFeatured = getFeaturedFrom(newArticleList);

        // if found
        if (newFeatured) {
          setFeaturedArticle(newFeatured);
          setArticles(
            newArticleList.filter(
              (article) => article.sys.id !== newFeatured.sys.id
            )
          );
        } else {
          setArticles(newArticleList);
        }
      } else {
        setArticles(newArticleList);
      }
    })();
    // eslint-disable-next-line
  }, [category]);

  return (
    <StoreContext.Provider
      value={{
        featuredArticle,
        articles,
        loadMoreArticles,
        setCategory,
        category,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
