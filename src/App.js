import React from "react";
// components
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";

// initial store

import storeReducer from "./components/reducer";

const initialStore = {
  cart: cartItems,
  total: 0,
};
// const storeReducer = (state = initialStore, action) => {
//   console.log("ready", state);
// };
const store = createStore(storeReducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
