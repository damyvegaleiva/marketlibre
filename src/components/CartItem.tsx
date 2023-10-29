import { useDispatch } from "react-redux";
import { addQty, removeItem, removeQty } from "../features/cart/cartSlice";
import CartOptionsButton from "./CartOptions";

type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
  stock: number;
  title: string;
  options: boolean;
};

const CartItem: React.FC<CartItem> = ({
  title,
  qty,
  image,
  price,
  id,
  options,
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
        {options && (
          <CartOptionsButton
            className={"inline px-1 border"}
            text={"-"}
            functionToDispatch={() => dispatch(removeQty(id))}
          />
        )}

        <p className="inline px-4">{qty}</p>
        {options && (
          <CartOptionsButton
            className={"inline px-1 border"}
            text={"+"}
            functionToDispatch={() => dispatch(addQty(id))}
          />
        )}
      </th>

      <th>
        <p>$ {price}</p>
      </th>

      {options && (
        <th>
          <CartOptionsButton
            className={"hover:cursor-pointer"}
            text={"X"}
            functionToDispatch={() => dispatch(removeItem(id))}
          />
        </th>
      )}
    </tr>
  );
};

export default CartItem;
