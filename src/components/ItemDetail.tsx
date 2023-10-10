import { TDataItem } from "../types/types";
import ItemDetailInfo from "./ItemDetailInfo";
import ItemDetailPictures from "./ItemDetailPictures";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetail: React.FC<TItemDetail> = ({ item }) => {
  return (
    <article className="flex flex-row items-center justify-center w-1/2 gap-5 py-10 m-auto mt-16 text-center bg-white rounded-lg">
      <ItemDetailInfo item={item} />

      <ItemDetailPictures pictures={item?.pictures} />
    </article>
  );
};

export default ItemDetail;
