import { TDataItem } from "../types/types";

export const ItemDetailAdapter = (data: TDataItem | null) => {
  if (data) {
    return {
      ...data,
      thumbnail: data.thumbnail.replace("-I.jpg", "-V.jpg"),
    };
  }
  return;
};
