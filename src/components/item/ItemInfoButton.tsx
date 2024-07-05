import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addToCart } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { TDataResults } from "../../types/types";

type TItemInfoButtonProps = {
  item: TDataResults;
};

const ItemInfoButton: React.FC<TItemInfoButtonProps> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isInCart = useSelector(
    (state: RootState) => state.cart.isInCart[item.id]
  );

  const itemToAdd = {
    id: item.id,
    title: item.title,
    thumbnail: item.thumbnail,
    price: item.price,
    stock: item.available_quantity,
  };

  const handleClick = () => {
    dispatch(addToCart(itemToAdd));
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
