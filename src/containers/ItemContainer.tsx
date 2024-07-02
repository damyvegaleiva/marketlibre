import { TDataResults } from "../types/types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setIsInCart } from "../features/cart/cartSlice";
import ItemImage from "../components/item/ItemImage";
import ItemInfo from "../components/item/ItemInfo";

type TItemContainerProps = {
  item: TDataResults;
};

const ItemContainer = ({ item }: TItemContainerProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsInCart(item.id));
  }, [dispatch, item.id]);

  return (
    <article className="flex flex-row border bg-[#FFFFFF] rounded-sm w-full sm:w-[75%] md:w-[60%] lg:max-w-[800px] py-5 m-auto hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
      <ItemImage thumbnail={item.thumbnail} id={item.id} />

      <ItemInfo item={item} />
    </article>
  );
};

export default ItemContainer;
