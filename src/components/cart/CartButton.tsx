import { useDispatch } from "react-redux";
import { addQty, removeItem, removeQty } from "../../features/cart/cartSlice";
import { FaRegTrashCan } from "react-icons/fa6";

type CartButtonProps = {
  operator: string;
  id: string;
  className: string;
};

const CartButton: React.FC<CartButtonProps> = ({ className, operator, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    switch (operator) {
      case "-":
        dispatch(removeQty(id));
        break;
      case "+":
        dispatch(addQty(id));
        break;
      case "x":
        dispatch(removeItem(id));
        break;
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {operator === "x" ? <FaRegTrashCan /> : operator}
    </button>
  );
};

export default CartButton;
