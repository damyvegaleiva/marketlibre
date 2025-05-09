const ACCESS_TOKEN: string = import.meta.env.VITE_ACCESS_TOKEN;
const BASE_URL: string = "https://api.mercadolibre.com";
const CATEGORIES_LIST_URL: string = "/sites/MLA/categories";
const ITEM_SEARCH_URL = (value: string | undefined): string =>
  `/products/search?status=active&site_id=MLA&q=${value}`;

const CATEGORY_SEARCH_URL = (value: string | undefined) =>
  `/sites/MLA/search?category=${value}`;

const ITEM_URL = (value: string | undefined): string => `/items/${value}`;

export {
  BASE_URL,
  ITEM_SEARCH_URL,
  CATEGORIES_LIST_URL,
  CATEGORY_SEARCH_URL,
  ITEM_URL,
  ACCESS_TOKEN,
};
