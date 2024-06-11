import ItemDetailPicturesListContainer from "../containers/ItemDetailPicturesListContainer";
import { TDataItem } from "../types/types";
import ItemDetailInfo from "./ItemDetailInfo";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetail: React.FC<TItemDetail> = ({ item }) => {
  return (
    <article className="flex flex-col w-full max-w-[1200px] gap-5 py-5 m-auto bg-white lg:mt-20 lg:w-2/2 lg:flex-row lg:px-2 lg:py-10 lg:gap-3">
      <h2 className="text-xl lg:hidden w-[90%] m-auto">{item?.title}</h2>

      <ItemDetailInfo item={item} />

      <ItemDetailPicturesListContainer pictures={item?.pictures} />
    </article>
  );
};

export default ItemDetail;
