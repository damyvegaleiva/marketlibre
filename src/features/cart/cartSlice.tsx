import { createSlice } from "@reduxjs/toolkit";
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
}

const initialState: CartState = {
  cart: [],
  isInCart: false,
  totalItems: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsInCart: (state, action) => {
      state.isInCart = state.cart.some((item) => item.id === action.payload);
      return;
    },

    setTotalItems: (state) => {
      let count = 0;

      state.cart.map((item) => {
        count += item.qty;
      });

      state.totalItems = count;
    },

    addToCart: (state, action) => {
      const isInCart = state.cart.find((item) => item.id === action.payload.id);

      if (isInCart) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id && item.qty < item.stock
            ? { ...item, qty: item.qty + 1 }
            : { ...item }
        );

        return;
      }

      state.cart.push({
        id: action.payload.id,
        title: action.payload.title,
        image: action.payload.thumbnail,
        price: action.payload.price,
        stock: action.payload.available_quantity,
        qty: 1,
      });
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      return;
    },

    clearCart: (state) => {
      state.cart = [];
    },

    addQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty < item.stock
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );
    },

    removeQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  setIsInCart,
  setTotalItems,
  addQty,
  removeQty,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
