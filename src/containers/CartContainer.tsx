import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";
import CartEmptyWidget from "../components/cart/CartEmptyWidget";

const CartContainer: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  if (cart.length < 1) return <CartEmptyWidget />;

  return (
    <div className="flex flex-col w-full md:w-[90%] m-auto max-w-[1200px]">
      <table className="px-2 mt-20 bg-white">
        <thead>
          <tr>
            <th className="pl-2">Imagen</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th className="pr-2">X</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} options={true} />
          ))}
        </tbody>
      </table>

      <Link
        to={"/checkout"}
        className="mt-10 text-lg text-center underline lg:text-2xl"
      >
        Continuar con la compra
      </Link>
    </div>
  );
};

export default CartContainer;
