import { useDispatch, useSelector } from "react-redux";
import { setIsInCart } from "../../../features/cart/cartSlice";
import { TDataItem } from "../../../types/types";
import { RootState } from "../../../app/store";

import { useEffect } from "react";
import CartActions from "../../cart/CartActions";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetailInfo: React.FC<TItemDetail> = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const isInCart = !!cart.cart.find((itemInCart) => itemInCart.id === item?.id);

  useEffect(() => {
    if (item) {
      dispatch(setIsInCart(item.id));
    }
  }, [item, dispatch, cart.cart]);

  return (
    <div className="flex flex-col order-4 px-2 w-[90%] m-auto  text-left border rounded-md lg:py-2 lg:px-5 lg:h-[550px]">
      <h2 className="hidden text-xl lg:block">{item?.title}</h2>
      <div className="my-5">
        {item?.original_price && (
          <span className="text-gray-400 line-through">
            ${item.original_price}
          </span>
        )}
        <p className="text-4xl">${item?.price}</p>
      </div>
      <div className="flex flex-col gap-2 text-sm text-gray-400">
        <p>- Disponible</p>

        {item?.available_quantity && (
          <p>
            - Stock: {""}
            {item?.available_quantity === 1 ? (
              <>
                {item.available_quantity}
                <span className="text-red-400"> (Ultimo disponible!)</span>
              </>
            ) : (
              <> {item?.available_quantity} </>
            )}
          </p>
        )}

        {item && item?.sold_quantity > 0 && (
          <p className="text-green">- Vendidos: {item.sold_quantity}</p>
        )}

        <p>
          - Condición:{" "}
          {item &&
            item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
        </p>
      </div>

      <CartActions isInCart={isInCart} item={item} />
    </div>
  );
};

export default ItemDetailInfo;
