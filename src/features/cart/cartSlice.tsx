import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
  isInCart: { [key: string]: boolean }; // OBJECT TO TRACK ITEMS IN CART
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  isInCart: {},
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
    // CHECK IF ITEM IS ALREADY IN THE CART
    setIsInCart: (state, action) => {
      state.isInCart[action.payload] = state.cart.some(
        (item) => item.id === action.payload
      );
    },

    // ADD ITEM TO THE CART, OR INCREASE THE QUANTITY IF IT ALREADY EXISTS
    addToCart: (state, action) => {
      const isInCart = state.cart.find((item) => item.id === action.payload.id);

      const notify = (title: string) =>
        toast.info(title, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 750,
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
          stock: action.payload.stock,
          qty: 1,
        });

        notify("Item agregado al carrito.");
      }

      // UPDATE TOTAL ITEMS AND TOTAL PRICE
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);

      // UPDATE THE ISINCART STATE
      state.isInCart[action.payload.id] = true;
    },

    // REMOVE ITEM FROM THE CART
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      // UPDATE TOTAL ITEMS AND TOTAL PRICE
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);

      // UPDATE THE ISINCART STATE
      state.isInCart[action.payload] = false;
    },

    // CLEAR THE CART
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.isInCart = {};
    },

    // ADD QUANTITY TO ITEM
    addQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty < item.stock
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );

      // UPDATE TOTAL ITEMS AND TOTAL PRICE
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
    },

    // REMOVE QUANTITY FROM ITEM
    removeQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );

      // UPDATE TOTAL ITEMS AND TOTAL PRICE
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);
    },
  },
});

// ACTION CREATORS ARE GENERATED FOR EACH CASE REDUCER FUNCTION
export const {
  addToCart,
  setIsInCart,
  addQty,
  removeQty,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
