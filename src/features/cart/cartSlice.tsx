import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
};

export interface CartState {
  cart: CartItem[];
  isInCart: boolean;
}

const initialState: CartState = {
  cart: [],
  isInCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsInCart: (state, action) => {
      state.isInCart = state.cart.some((item) => item.id === action.payload);
      return;
    },

    addToCart: (state, action) => {
      const isInCart = state.cart.find((item) => item.id === action.payload.id);

      if (isInCart) return console.log("Ya existe en el carrito.");

      state.cart.push({
        id: action.payload.id,
        image: action.payload.thumbnail,
        price: action.payload.price,
        qty: 1,
      });

      return;
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, setIsInCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
