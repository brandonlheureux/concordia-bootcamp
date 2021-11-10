import { getAllArticles } from "../services/contentful";

export const loadMoreArticles = async (origin) => {
  return await getAllArticles(6, origin);
};
