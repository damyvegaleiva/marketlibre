import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { RootState } from "../app/store";
import FormContainer from "./FormContainer";

const CheckOutContainer = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <table className="w-1/3 m-auto mt-20 bg-white ">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} options={false} />
          ))}
        </tbody>
      </table>

      <FormContainer />
    </div>
  );
};

export default CheckOutContainer;
