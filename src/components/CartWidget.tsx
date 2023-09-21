import { BsCart2 } from "react-icons/bs";
import { NavigateFunction, useNavigate } from "react-router-dom";

const CartWidget = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div
      className="navbar-cart"
      role="button"
      tabIndex={0}
      onClick={() => navigate("/cart")}
    >
      <BsCart2 />
    </div>
  );
};

export default CartWidget;
