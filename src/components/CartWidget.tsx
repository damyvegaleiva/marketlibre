import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="flex items-center justify-start gap-4 navbar-cart">
      <Link to={"/login"}>
        <h2>Ingresa</h2>
      </Link>

      <Link to={"/cart"}>
        <BsCart2 />
      </Link>
    </div>
  );
};

export default CartWidget;
