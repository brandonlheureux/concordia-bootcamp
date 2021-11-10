import request, { GET } from "./request";

const CONTENTFUL_URL = `https://cdn.contentful.com/spaces/6fmuqje9nkz0/environments/master/entries?access_token=yNcU-W6qITUmC18PRtK6Gyy32Vy7oGLRAWzW-2zyUaM&content_type=blog-entry`;

// TODO: Update the method below to utilize contentful's pagination functionality to return only 6 entries
//       NOTE: remember on "load more" it's 6 *additional* entries
export const getAllArticles = async (limit = 6, origin = 0) => {
  try {
    const response = await request(
      GET,
      CONTENTFUL_URL +
        "&" +
        new URLSearchParams({
          limit: limit,
          skip: origin,
        })
    );

    return response.items;
  } catch (e) {
    console.log("getAllArticles failed:", e);
  }
};

// TODO: Using the category argument, update the method below by making a GET
//       request and returning entries from contentful filtered by the category.
//       NOTE: this method will need to be connected to ../contexts/Store!

// since this is in the contenful file, i'm assuming we want to use the category argument
// as a query param, while maintaining pagination.

export const getArticlesByCategory = async (
  limit = 6,
  origin = 0,
  category = "all"
) => {
  try {
    const response = await request(
      GET,
      CONTENTFUL_URL +
        "&" +
        new URLSearchParams({
          limit: limit,
          skip: origin,
          "fields.category": category,
        })
    );

    return response.items;
  } catch (e) {
    console.log("getArticlesByCategory failed:", e);
  }
};

// Possibly useful documentation:
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters
// - https://www.contentful.com/developers/docs/references/content-management-api/#/reference/entries/entries-collection/get-all-entries-of-a-space/console
// - https://www.contentful.com/developers/docs/references/content-delivery-api/#/introduction/collection-resources-and-pagination
