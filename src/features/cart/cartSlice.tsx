import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Define the CartItem type
type CartItem = {
  id: string;
  image: string;
  price: number;
  qty: number;
  stock: number;
  title: string;
};

// Define the CartState interface
export interface CartState {
  cart: CartItem[];
  isInCart: { [key: string]: boolean };
  totalItems: number;
  totalPrice: number;
}

// Initialize the cart state from localStorage or with default values
const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  isInCart: JSON.parse(localStorage.getItem("isInCart") || "{}"),
  totalItems: 0,
  totalPrice: 0,
};

// Helper functions to calculate total items and total price
const calculateTotalPrice = (cart: CartState["cart"]) => {
  return cart.reduce((total, item) => total + item.qty * item.price, 0);
};

const calculateTotalItems = (cart: CartState["cart"]) => {
  return cart.reduce((total, item) => total + item.qty, 0);
};

// Define the cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Set whether an item is in the cart
    setIsInCart: (state, action) => {
      state.isInCart[action.payload] = state.cart.some(
        (item) => item.id === action.payload
      );
    },

    // Add an item to the cart or increase its quantity if it already exists
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

          notify("No hay más disponibilidad en stock.");
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

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);

      // Update the isInCart state
      state.isInCart[action.payload.id] = true;

      // Sync state with localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("isInCart", JSON.stringify(state.isInCart));
      localStorage.setItem("totalItems", state.totalItems.toString());
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);

      // Update the isInCart state
      state.isInCart[action.payload] = false;

      // Sync state with localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("isInCart", JSON.stringify(state.isInCart));
      localStorage.setItem("totalItems", state.totalItems.toString());
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    // Add quantity to an item
    addQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty < item.stock
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);

      // Sync state with localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalItems", state.totalItems.toString());
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    // Remove quantity from an item
    removeQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );

      // Update total items and total price
      state.totalItems = calculateTotalItems(state.cart);
      state.totalPrice = calculateTotalPrice(state.cart);

      // Sync state with localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalItems", state.totalItems.toString());
      localStorage.setItem("totalPrice", state.totalPrice.toString());
    },

    // Clear the cart
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.isInCart = {};

      // Sync state with localStorage
      localStorage.removeItem("cart");
      localStorage.removeItem("isInCart");
      localStorage.removeItem("totalItems");
      localStorage.removeItem("totalPrice");
    },

    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },

    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
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
  setTotalItems,
  setTotalPrice,
} = cartSlice.actions;

// Export the cart reducer
export default cartSlice.reducer;
