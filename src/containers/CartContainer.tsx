import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";

const CartContainer: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  if (cart.length < 1)
    return <h2 className="mt-40 text-3xl text-center">Carrito vació.</h2>;

  return (
    <div className="flex flex-col w-full">
      <table className="w-1/2 m-auto mt-20 bg-white">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} options={true} />
          ))}
        </tbody>
      </table>

      <h2 className="mt-10 text-2xl text-center">
        <Link to={"/checkout"} className="text-center underline">
          Continuar con la compra
        </Link>
      </h2>
    </div>
  );
};

export default CartContainer;
