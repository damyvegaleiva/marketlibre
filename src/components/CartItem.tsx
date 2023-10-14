import { useDispatch } from "react-redux";
import { addQty, removeItem, removeQty } from "../features/cart/cartSlice";

type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
  stock: number;
  title: string;
};

const CartItem: React.FC<CartItem> = ({ title, qty, image, price, id }) => {
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
        <button
          className="inline px-1 border"
          onClick={() => dispatch(removeQty(id))}
        >
          -
        </button>
        <p className="inline px-4">{qty}</p>
        <button
          className="inline px-1 border"
          onClick={() => dispatch(addQty(id))}
        >
          +
        </button>
      </th>

      <th>
        <p>$ {price}</p>
      </th>

      <th>
        <p
          className="hover:cursor-pointer"
          onClick={() => dispatch(removeItem(id))}
        >
          X
        </p>
      </th>
    </tr>
  );
};

export default CartItem;
