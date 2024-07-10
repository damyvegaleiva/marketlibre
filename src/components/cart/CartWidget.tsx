import React, { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { setTotalItems, setTotalPrice } from "../../features/cart/cartSlice";

type CartWidgetProps = {
  handleNavbarClick: () => void;
  className: string;
};

const CartWidget: React.FC<CartWidgetProps> = ({
  handleNavbarClick,
  className,
}) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate total items and update Redux store
    const totalItems = cart.cart.reduce((total, item) => total + item.qty, 0);
    dispatch(setTotalItems(totalItems));

    const totalPrice = cart.cart.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
    dispatch(setTotalPrice(totalPrice));
  }, [cart, dispatch]);

  return (
    <div className={`flex gap-4 navbar-cart ${className}`}>
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
