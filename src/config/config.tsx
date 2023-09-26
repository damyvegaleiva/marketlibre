const BASE_URL: string = "https://api.mercadolibre.com";

const SEARCH_URL = (value: string | undefined): string =>
  `/sites/MLA/search?q=${value}`;

const CATEGORIES_URL: string = "/sites/MLA/categories";

const ITEM_URL = (value: string | undefined): string => `/items/${value}`;

export { BASE_URL, SEARCH_URL, CATEGORIES_URL, ITEM_URL };
