import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { TDataItem } from "../../types/types";
import { useNavigate } from "react-router-dom";
import CartActionButton from "./CartActionButton";

type CartActionsProps = {
  isInCart: boolean;
  item: TDataItem | undefined;
};

const CartActions: React.FC<CartActionsProps> = ({ isInCart, item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isInCart) {
    return (
      <div className="flex flex-col gap-0 mt-auto">
        <CartActionButton
          text={"Ir al Carrito"}
          className="w-[75%] max-w-[200px] text-m px-5 py-2 mx-auto mt-10 text-white rounded-md bg-blue-primary d hover:bg-dark-blue lg:mt-auto"
          functionToDispatch={() => navigate("/cart")}
        />

        <CartActionButton
          text={"Continuar comprando"}
          className="w-[75%] max-w-[300px] text-m px-5 py-2 mx-auto mt-2 text-white rounded-md bg-blue-primary d hover:bg-dark-blue"
          functionToDispatch={() => navigate("/")}
        />
      </div>
    );
  }

  return (
    <CartActionButton
      text={"Agregar al Carrito"}
      className="w-[75%] max-w-[300px] text-m px-5 py-2 mx-auto mt-10 text-white rounded-md bg-blue-primary d hover:bg-dark-blue lg:mt-auto"
      functionToDispatch={() => dispatch(addToCart(item))}
    />
  );
};

export default CartActions;
