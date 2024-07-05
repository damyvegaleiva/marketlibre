import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

import { useNavigate } from "react-router-dom";
import ItemDetailActionButton from "./ItemDetailActionButton";
import { TDataItem } from "../../../types/types";

type ItemDetailActionsProps = {
  isInCart: boolean;
  item: TDataItem | undefined;
  itemQueryParams: { [key: string]: number | undefined };
};

const ItemDetailActions: React.FC<ItemDetailActionsProps> = ({
  isInCart,
  item,
  itemQueryParams,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemToAdd = {
    id: item?.id,
    title: item?.title,
    thumbnail: item?.thumbnail,
    price: itemQueryParams.price,
    stock: itemQueryParams.stock,
  };

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
        functionToDispatch={() => dispatch(addToCart(itemToAdd))}
        text={"Agregar al Carrito"}
      />
    </section>
  );
};

export default ItemDetailActions;
