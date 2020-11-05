import { CLEAR_CART, INCREASE, DECREASE, REMOVE } from "./actions";
export default function storeReducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
    console.log("poda", action.payload.id);
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((item) => {
      console.log("itemis", item);
      if (item.id === action.payload.id)
        return { ...item, amount: action.payload.amount + 1 };
      else return { ...item };
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === DECREASE) {
    return { ...state, cart: [] };
  }
  return state;
}
