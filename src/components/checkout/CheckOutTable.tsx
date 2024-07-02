import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CartItem from "../cart/CartItem";

const CheckOutTable = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="w-[95%] m-auto bg-white lg:order-2 lg:w-[50%] shadow-2xl mt-5 lg:mt-0 max-w-[900px]">
      <h2 className="py-10 text-lg text-center underline uppercase lg:text-2xl">
        Detalles de la compra
      </h2>

      <table className="m-auto">
        <thead>
          <tr>
            <th></th>
            <th>Titulo</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {cart.cart.map((item) => (
            <CartItem key={item.id} {...item} options={false} />
          ))}

          <tr>
            <th></th>
            <th className="py-10"></th>
            <th>TOTAL:</th>
            <th>$ {cart.totalPrice}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckOutTable;
