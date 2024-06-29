import { purchaseSchema, TPurchaseSchema } from "../types/types";
import { useEffect, useState } from "react";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "../services/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "../components/cart/CartItem";
import FormContainer from "./FormContainer";

const CheckOutContainer = () => {
  const [orderId, setOrderId] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(15);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (orderId) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [orderId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TPurchaseSchema>({
    resolver: zodResolver(purchaseSchema),
  });

  const createOrder = async (data: TPurchaseSchema) => {
    const orderRef = collection(db, "orders");
    const orderAdded = await addDoc(orderRef, {
      ...data,
      cart: cart.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { stock, image, ...rest } = item;
        return { ...rest };
      }),
    });

    const { id } = orderAdded;

    setOrderId(id);
  };

  const onSubmit = async (data: TPurchaseSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await createOrder(data);

    reset();
    dispatch(clearCart());

    await new Promise((resolve) => setTimeout(resolve, 15000));
    navigate("/");
  };

  if (orderId) {
    return (
      <div className="grid place-content-center place-items-center bg-white h-[500px] m-auto gap-8">
        <h2 className="text-xl ">
          Gracias por tu compra. El ID de tu compra es:
          <span className="ml-1 font-semibold underline">{orderId}</span>
        </h2>
        <h2 className="font-mono">
          En breve te redirigiremos a la página de inicio...
        </h2>
        <h2 className="font-thin">Redireccionando en {countdown} segundo(s)</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-5 bg-white lg:flex-row lg:mt-10 lg:py-10">
      <h2 className="text-2xl font-semibold underline uppercase">
        Detalles de la compra
      </h2>

      <table className="w-[95%] m-auto mt-1 bg-white border-2 border-blue-500 lg:order-2 lg:w-1/3">
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

      <FormContainer
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CheckOutContainer;
