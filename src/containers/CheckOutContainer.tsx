import { purchaseSchema, TPurchaseSchema } from "../types/types";
import { useState } from "react";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "../services/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { clearCart } from "../features/cart/cartSlice";
import FormContainer from "./FormContainer";
import CartEmptyWidget from "../components/cart/CartEmptyWidget";
import CheckOutTable from "../components/checkout/CheckOutTable";
import CheckOutPurchaseMessage from "../components/checkout/CheckOutPurchaseMessage";

const CheckOutContainer = () => {
  const [orderId, setOrderId] = useState<string>("");
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      cart: cart.cart.map((item) => {
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
    setOrderId("");
  };

  if (cart.cart.length < 1 && !orderId) return <CartEmptyWidget />;

  if (orderId) return <CheckOutPurchaseMessage orderId={orderId} />;

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-16 bg-gray-200 rounded-xl lg:flex-row">
      <CheckOutTable />

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
