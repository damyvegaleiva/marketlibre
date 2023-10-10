import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  qty: number;
  cart: object[];
}

const initialState: CounterState = {
  qty: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemExistsInCart: (state, action: PayloadAction<string>) => {
      return state.cart.some((item) => item.id === action.payload.id);
    },

    addToCart: (state, action) => {
      const exists = state.cart.some((item) => item.id === action.payload.id);

      if (exists) {
        console.log("Item already exists in cart.");
        return;
      }

      state.cart.push({
        id: action.payload.id,
        image: action.payload.thumbnail,
        price: action.payload.price,
        qty: 1,
      });
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
