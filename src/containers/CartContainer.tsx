import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CartItem from "../components/CartItem";

const CartContainer: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

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
            <CartItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartContainer;
