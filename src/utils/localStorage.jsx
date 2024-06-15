// Function to load the cart from local storage
export const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return undefined;
  }
  // try {
  //   const serializedState = localStorage.getItem("cartItems");
  //   return serializedState ? JSON.parse(serializedState) : [];
  // } catch (e) {
  //   console.warn("Could not load cart items from local storage:", e);
  //   return [];
  // }
};

// Function to save the cart to local storage
export const saveCart = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.log("error while saving cart to local storage", err);
  }
  // try {
  //   const serializedState = JSON.stringify(cart);
  //   localStorage.setItem("cartItems", serializedState);
  // } catch (e) {
  //   console.warn("Could not save cart items to local storage:", e);
  // }
};
