import { TDataResults } from "../types/types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ItemImage from "../components/item/ItemImage";
import ItemInfo from "../components/item/ItemInfo";
import { setIsInCart } from "../features/cart/cartSlice";

type TItemContainerProps = {
  item: TDataResults;
};

const ItemContainer = ({ item }: TItemContainerProps) => {
  const dispatch = useDispatch();
  const baseUrl = `/item/${item.id}?qty=${item.available_quantity}&price=${item.price}`;

  useEffect(() => {
    dispatch(setIsInCart(item.id));
  }, [dispatch, item.id]);

  const finalUrl = `${baseUrl}${
    item.original_price !== null ? `&og_price=${item.original_price}` : ""
  }`;

  return (
    <article className="flex flex-row border bg-[#FFFFFF] rounded-sm w-full sm:w-[75%] md:w-[60%] lg:max-w-[800px] py-5 m-auto hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
      <ItemImage thumbnail={item.thumbnail} url={finalUrl} />

      <ItemInfo item={item} url={finalUrl} />
    </article>
  );
};

export default ItemContainer;
