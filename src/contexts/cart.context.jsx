import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartitems contains productToAdd
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  // if found, increment the quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array witth modified cartItems/ new cart items
  return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, productToRemove) => {
  
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeInCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if (existingCartItem){
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  removeItemFromcart: () => {},
  removeFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
   const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,0);
   setCartCount(newCartCount);
  },[cartItems]);

   useEffect(() => {
     const newCartTotal = cartItems.reduce(
       (total, cartItem) => total + cartItem.quantity * cartItem.price,
       0
     );
     setCartTotal(newCartTotal);
   }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromcart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

   const removeFromcart = (itemToRemove) => {
     setCartItems(removeInCart(cartItems, itemToRemove));
   };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromcart,
    removeFromcart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}