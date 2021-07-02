import {
  GET_CART,
  UPDATE_CART,
  REMOVE_CART,
  TOTAL_CART,
  INCREASE_CART,
  DECREASE_CART,
} from "./types";

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CART:
      const carts = payload.cart;
      return { ...state, carts };
    case UPDATE_CART:
      return { ...state, carts: payload.carts };
    case INCREASE_CART:
      const increaseCart = state.carts.map((cart) => {
        if (cart.id === payload.id) {
          return { ...cart, amount: cart.amount + 1 };
        }
        return { ...cart };
      });
      return { ...state, carts: increaseCart };
    case DECREASE_CART:
      const decreaseCart = state.carts
        .map((cart) => {
          if (cart.id === payload.id) {
            return { ...cart, amount: cart.amount - 1 };
          }
          return { ...cart };
        })
        .filter((cart) => cart.amount !== 0);
      return { ...state, carts: decreaseCart };
    case REMOVE_CART:
      const newCarts = state.carts.filter((cart) => {
        return cart.id !== payload.id;
      });
      return { ...state, carts: newCarts };
    case TOTAL_CART:
      const total = state.carts.reduce((sum, cart) => {
        const totalItem = cart.amount * cart.price;
        return (sum += Number(totalItem));
      }, 0);
      return { ...state, total: parseFloat(total.toFixed(2)) };
    default:
      return state;
  }
};
