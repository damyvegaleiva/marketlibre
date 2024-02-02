import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { setTotalItems } from "../features/cart/cartSlice";

type CartWidgetProps = {
  handleNavbarClick: () => void;
};

const CartWidget: React.FC<CartWidgetProps> = ({ handleNavbarClick }) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalItems());
  }, [cart.cart, dispatch]);

  return (
    <div className="flex gap-4 navbar-cart">
      <Link to={"/login"} onClick={handleNavbarClick}>
        <h2>Ingresa</h2>
      </Link>

      <Link
        to={"/cart"}
        className="flex items-center"
        onClick={handleNavbarClick}
      >
        <BsCart2 className={"inline"} /> {cart.totalItems}
      </Link>
    </div>
  );
};

export default CartWidget;
