import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { TDataItem } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import ItemDetailActionButton from "./ItemDetailActionButton";

type ItemDetailActionsProps = {
  isInCart: boolean;
  item: TDataItem | undefined;
};

const ItemDetailActions: React.FC<ItemDetailActionsProps> = ({
  isInCart,
  item,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isInCart) {
    return (
      <section className="flex flex-col gap-2 mt-10 lg:mt-auto">
        <ItemDetailActionButton
          className="max-w-[250px]"
          text={"Ir al carrito"}
          functionToDispatch={() => navigate("/cart")}
        />
        <ItemDetailActionButton
          className="max-w-[300px]"
          text={"Continuar comprando"}
          functionToDispatch={() => navigate("/")}
        />
      </section>
    );
  }

  return (
    <section className="flex mt-10 lg:mt-auto">
      <ItemDetailActionButton
        className="max-w-[300px]"
        functionToDispatch={() => dispatch(addToCart(item))}
        text={"Agregar al Carrito"}
      />
    </section>
  );
};

export default ItemDetailActions;
