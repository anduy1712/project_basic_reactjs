import React, { createContext, useEffect, useState, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";
import {
  GET_CART,
  REMOVE_CART,
  TOTAL_CART,
  INCREASE_CART,
  DECREASE_CART,
} from "../reducers/types";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
  //init
  const url = "https://course-api.com/react-useReducer-cart-project";
  const initState = {
    carts: [],
    total: 0,
    loading: false,
  };

  //state
  const [state, dispatch] = useReducer(cartReducer, initState);

  //FUNCTION
  //INCREASE
  const increaseCart = (id) => {
    dispatch({
      type: INCREASE_CART,
      payload: { id },
    });
  };
  //DECREASE
  const decreaseCart = (id) => {
    dispatch({
      type: DECREASE_CART,
      payload: { id },
    });
  };
  //Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const cart = await res.json();
      // setCart(cart);
      dispatch({
        type: GET_CART,
        payload: { cart },
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    //TOTAL CART
    dispatch({
      type: TOTAL_CART,
    });
  }, [state.carts]);

  //context data
  const cartContextData = {
    ...state,
    increaseCart,
    decreaseCart,
    dispatch,
  };

  //return provider
  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
