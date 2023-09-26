import { TDataSearch } from "../types/types";

export const ItemListAdapter = (data: TDataSearch | null) => {
  if (data?.results) {
    return data.results.map(({ thumbnail, ...rest }) => ({
      thumbnail: thumbnail.replace("-I.jpg", "-V.jpg"),
      ...rest,
    }));
  }
  return;
};
