import { createSlice } from "@reduxjs/toolkit";
import { loadCart, saveCart } from "../../utils/localStorage";

// Initial state for the cart
const initialCartState = {
  items: [],
  totalQuantity: 0,
};

// Load persisted cart state from local storage if available
const persistedCart = loadCart();

// Create a slice for the cart with Redux Toolkit
const cartSlice = createSlice({
  name: "cart",
  initialState: persistedCart ? persistedCart : initialCartState,
  reducers: {
    addItemToCart: (state, action) => {
      const addedItem = action.payload;
      const existingItem = state.items.find((item) => item.id === addedItem.id);
      state.totalQuantity += addedItem.quantity;
      if (!existingItem) {
        state.items.push(addedItem);
      } else {
        existingItem.quantity += addedItem.quantity;
      }
      saveCart(state);
    },
    increaseQuantity: (state, action) => {
      state.totalQuantity++;
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      saveCart(state);
    },
    decreaseQuantity: (state, action) => {
      state.totalQuantity--;
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      saveCart(state);
    },
    clearCart: () => {
      return initialCartState;
    },
  },
});

// Selector to get cart items from the state
export const cartItems = (state) => state.cart.items;

// Selector to calculate the total amount in the cart
export const totalAmount = (state) => {
  const total = state.cart.items.reduce((cartTotal, currentItem) => {
    const { price, quantity } = currentItem;
    cartTotal += price * quantity;
    return cartTotal;
  }, 0);

  return parseFloat(total.toFixed(2));
};

// Selector to get the total quantity of items in the cart
export const totalQuantity = (state) => state.cart.totalQuantity;

// Exporting actions generated by createSlice
export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

// Exporting the reducer generated by createSlice
export default cartSlice.reducer;
