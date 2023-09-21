const BASE_URL: string = "https://api.mercadolibre.com/sites/MLA/";
const SEARCH_URL = (value: string | undefined): string => `search?q=${value}`;

export { BASE_URL, SEARCH_URL };
