import { useDispatch, useSelector } from "react-redux";
import { TDataItem } from "../types/types";
import { addToCart, setIsInCart } from "../features/cart/cartSlice";
import { RootState } from "../app/store";
import { useEffect } from "react";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetailInfo: React.FC<TItemDetail> = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (item) {
      dispatch(setIsInCart(item.id));
    }
  }, [item, dispatch, cart.cart]);

  return (
    <div className="flex flex-col order-4 px-2 w-[90%] m-auto text-left border rounded-md lg:py-2 lg:px-5 lg:h-[550px]">
      <h2 className="hidden text-xl md:block">{item?.title}</h2>

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

      <button
        className="w-[75%] max-w-[300px] text-m px-5 py-2 mx-auto mt-10 text-white rounded-md bg-blue-primary d hover:bg-dark-blue lg:mt-auto"
        onClick={() => dispatch(addToCart(item))}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetailInfo;
