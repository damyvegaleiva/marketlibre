import { TDataSearch } from "../types/types";

export const ItemListAdapter = (data: TDataSearch | null) => {
  if (data) {
    return data.results.map((item) => ({
      ...item,
      thumbnail: item.thumbnail.replace("-I.jpg", "-V.jpg"),
    }));
  }
  return;
};
