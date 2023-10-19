import { useDispatch } from "react-redux";
import { addQty, removeItem, removeQty } from "../features/cart/cartSlice";

type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
  stock: number;
  title: string;
  cartOptions: boolean;
};

const CartItem: React.FC<CartItem> = ({
  title,
  qty,
  image,
  price,
  id,
  cartOptions,
}) => {
  const dispatch = useDispatch();

  return (
    <tr className="mb-4 text-black border">
      <th>
        <img src={image} alt="" className="w-[100px]" />
      </th>

      <th>
        <h2>{title}</h2>
      </th>

      <th>
        {cartOptions && (
          <button
            className="inline px-1 border"
            onClick={() => dispatch(removeQty(id))}
          >
            -
          </button>
        )}

        <p className="inline px-4">{qty}</p>
        {cartOptions && (
          <button
            className="inline px-1 border"
            onClick={() => dispatch(addQty(id))}
          >
            +
          </button>
        )}
      </th>

      <th>
        <p>$ {price}</p>
      </th>

      {cartOptions && (
        <th>
          <button
            className="hover:cursor-pointer"
            onClick={() => dispatch(removeItem(id))}
          >
            X
          </button>
        </th>
      )}
    </tr>
  );
};

export default CartItem;
