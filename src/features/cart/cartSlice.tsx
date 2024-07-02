import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
  stock: number;
  title: string;
};

export interface CartState {
  cart: CartItem[];
  isInCart: boolean;
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  isInCart: false,
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotalPrice = (cart: CartState["cart"]) => {
  return cart.reduce((total, item) => total + item.qty * item.price, 0);
};

const calculateTotalItems = (cart: CartState["cart"]) => {
  return cart.reduce((total, item) => total + item.qty, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // CHEQUEA SI YA EXISTE EN CARRITO.
    setIsInCart: (state, action) => {
      state.isInCart = state.cart.some((item) => item.id === action.payload);
    },

    //AGREGA ITEM AL CARRITO, SI YA EXISTE SUMA CANTIDAD AL ITEM.
    addToCart: (state, action) => {
      const isInCart = state.cart.find((item) => item.id === action.payload.id);

      const notify = (title: string) =>
        toast.info(title, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });

      if (isInCart) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id && item.qty < item.stock) {
            notify("Unidad agregada al carrito.");
            return { ...item, qty: item.qty + 1 };
          }

          notify("No hay mas disponibilidad en stock.");
          return { ...item };
        });
      } else {
        state.cart.push({
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.thumbnail,
          price: action.payload.price,
          stock: action.payload.available_quantity,
          qty: 1,
        });

        notify("Item agregado al carrito");
      }

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
    },

    //REMUEVE ITEM EN CARRITO.
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
    },

    //LIMPIA EL CARRITO.
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },

    //AGREGA CANTIDAD AL ITEM.
    addQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty < item.stock
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
    },

    //REMUEVE CANTIDAD DEL ITEM.
    removeQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  setIsInCart,
  addQty,
  removeQty,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
