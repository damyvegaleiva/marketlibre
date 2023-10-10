import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/store";

const CartWidget = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="flex gap-4 navbar-cart">
      <Link to={"/login"}>
        <h2>Ingresa</h2>
      </Link>

      <Link to={"/cart"}>
        <BsCart2 className={"inline"} /> {cart.length}
      </Link>
    </div>
  );
};

export default CartWidget;
