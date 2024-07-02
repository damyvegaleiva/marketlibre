import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addToCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

type TItemInfoButtonProps = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  available_quantity: number;
};

const ItemInfoButton: React.FC<TItemInfoButtonProps> = ({
  id,
  title,
  thumbnail,
  price,
  available_quantity: stock,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) => state.cart.isInCart[id]);

  const handleClick = () => {
    dispatch(addToCart({ id, title, thumbnail, price, stock }));
  };

  if (isInCart)
    return (
      <button
        className="w-[125px] py-2.5 text-xs text-white rounded-2xl bg-blue-primary hover:bg-dark-blue"
        onClick={() => navigate("/cart")}
      >
        Ir al 🛒
      </button>
    );

  return (
    <button
      onClick={handleClick}
      className="w-[125px] py-2.5 text-xs text-white rounded-2xl bg-blue-primary hover:bg-dark-blue"
    >
      Agregar al carrito
    </button>
  );
};

export default ItemInfoButton;
