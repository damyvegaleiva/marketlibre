export const ItemListAdapter = (data) => {
  if (data?.results) {
    return data.results.map(({ thumbnail, ...rest }) => ({
      thumbnail: thumbnail.replace("-I.jpg", "-V.jpg"),
      ...rest,
    }));
  }
};
