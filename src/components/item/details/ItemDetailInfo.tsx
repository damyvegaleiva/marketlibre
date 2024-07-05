import { useDispatch, useSelector } from "react-redux";
import { setIsInCart } from "../../../features/cart/cartSlice";
import { TDataItem } from "../../../types/types";
import { RootState } from "../../../app/store";
import { useEffect } from "react";
import ItemDetailActions from "./ItemDetailActions";

type TItemDetail = {
  item: TDataItem | undefined;
  itemQueryParams: { [key: string]: number | undefined };
};

const ItemDetailInfo: React.FC<TItemDetail> = ({ item, itemQueryParams }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) =>
    item ? state.cart.isInCart[item.id] : false
  );

  const itemData = {
    ...item,
    original_price: itemQueryParams.og_price,
    price: itemQueryParams.price ? itemQueryParams.price : item?.price,
    stock: itemQueryParams.stock,
  };

  useEffect(() => {
    if (item) {
      dispatch(setIsInCart(item.id));
    }
  }, [item, dispatch]);

  return (
    <div className="flex flex-col order-4 px-2 w-[90%] m-auto text-left border rounded-md lg:py-2 lg:px-5 lg:h-[550px]">
      <h2 className="hidden text-xl lg:block">{itemData?.title}</h2>

      <div className="my-5">
        {itemData?.original_price && (
          <span className="text-gray-400 line-through">
            ${itemData.original_price}
          </span>
        )}
        <p className="text-4xl">${itemData?.price}</p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-400">
        {itemData.stock && (
          <p>
            - Disponible(s): {""}
            {itemData.stock === 1 ? (
              <>
                {itemData.stock}
                <span className="text-red-400"> (Último disponible)</span>
              </>
            ) : (
              <> {itemData.stock} </>
            )}
          </p>
        )}

        {itemData?.initial_quantity && itemData.initial_quantity !== 1 && (
          <p className="text-green-700">
            - Vendidos:{" "}
            {itemData?.stock && itemData.initial_quantity - itemData.stock}
          </p>
        )}

        <p>
          - Condición:{" "}
          {itemData?.condition &&
            itemData.condition.charAt(0).toUpperCase() +
              itemData.condition.slice(1)}
        </p>
      </div>

      <ItemDetailActions
        isInCart={isInCart}
        item={item}
        itemQueryParams={itemQueryParams}
      />
    </div>
  );
};

export default ItemDetailInfo;
