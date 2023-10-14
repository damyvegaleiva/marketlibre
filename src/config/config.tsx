const BASE_URL: string = "https://api.mercadolibre.com";
const CATEGORIES_LIST_URL: string = "/sites/MLA/categories";
const ITEM_SEARCH_URL = (value: string | undefined): string =>
  `/sites/MLA/search?q=${value}`;

const CATEGORY_SEARCH_URL = (value: string | undefined) =>
  `/sites/MLA/search?category=${value}`;

const ITEM_URL = (value: string | undefined): string => `/items/${value}`;

export {
  BASE_URL,
  ITEM_SEARCH_URL,
  CATEGORIES_LIST_URL,
  CATEGORY_SEARCH_URL,
  ITEM_URL,
};
