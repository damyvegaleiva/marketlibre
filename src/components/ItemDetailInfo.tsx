import { useDispatch, useSelector } from "react-redux";
import { TDataItem } from "../types/types";
import { addToCart, setIsInCart } from "../features/cart/cartSlice";
import { RootState } from "../app/store";
import { Link } from "react-router-dom";
import { useEffect } from "react";

type TItemDetail = {
  item: TDataItem | undefined;
};

const ItemDetailInfo: React.FC<TItemDetail> = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  console.log(cart.cart);

  useEffect(() => {
    if (item) {
      dispatch(setIsInCart(item.id));
    }
  }, [item, dispatch, cart.cart]);

  console.log(cart.isInCart);

  return (
    <div className=" order-3 w-[400px] text-left self-stretch flex flex-col gap-10 border shadow-md rounded-md p-8">
      <h2 className="text-xl font-bold">{item?.title}</h2>
      <p className="mt-5 text-2xl">$ {item?.price}</p>

      <div className="flex flex-col gap-2 text-sm text-gray-400">
        <p>- Disponible</p>

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

        {item && item?.sold_quantity > 0 && (
          <p className="text-green">- Vendidos: {item.sold_quantity}</p>
        )}

        <p>
          - Condición:{" "}
          {item &&
            item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
        </p>
      </div>

      {!cart.isInCart ? (
        <button
          className="px-5 py-2 mx-auto mt-auto text-white rounded-md bg-blue-primary text-md hover:bg-dark-blue"
          onClick={() => dispatch(addToCart(item))}
        >
          Agregar al Carrito
        </button>
      ) : (
        <button
          className="px-5 py-2 mx-auto mt-auto text-white rounded-md bg-blue-primary text-md hover:bg-dark-blue"
          onClick={() => dispatch(addToCart(item))}
        >
          <Link to={"/cart"}>Ir al Carrito</Link>
        </button>
      )}
    </div>
  );
};

export default ItemDetailInfo;
