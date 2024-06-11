import { TDataItem } from "../types/types";
import ItemDetailInfo from "./ItemDetailInfo";
import ItemDetailPictures from "./ItemDetailPictures";
import Test from "./Test";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetail: React.FC<TItemDetail> = ({ item }) => {
  console.log(item);
  return (
    <article className="flex flex-col w-full gap-5 py-5 m-auto bg-white lg:mt-20 lg:w-1/2 lg:flex-row lg:px-2 lg:py-10 lg:gap-3">
      <h2 className="text-xl lg:hidden w-[90%] m-auto">{item?.title}</h2>

      <ItemDetailInfo item={item} />
      <Test pictures={item?.pictures} />

      <ItemDetailPictures pictures={item?.pictures} />
    </article>
  );
};

export default ItemDetail;
