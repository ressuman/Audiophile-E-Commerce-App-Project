import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import { saveCart } from "../../utils/localStorage";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Subscribe to store updates and save cart state to local storage
store.subscribe(() => {
  saveCart(store.getState().cart);
});
