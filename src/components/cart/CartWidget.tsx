import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

type CartWidgetProps = {
  handleNavbarClick: () => void;
  className: string;
};

const CartWidget: React.FC<CartWidgetProps> = ({
  handleNavbarClick,
  className,
}) => {
  const cart = useSelector((state: RootState) => state.cart);

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
