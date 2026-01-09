import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice(
  {
    name: "cart",
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
        state.push(action.payload);
      },
      removeFromCart: (state, action) => {
        return state.filter((itemId) => itemId !== action.payload);
      },
    },
  },
  {
    name: "cartOperators",
    initialState: { qty: 1 },
    reducers: {
      increment: (state) => {
        state.qty++;
      },
      decrement: (state) => {
        state.qty--;
      },
    },
  }
);
export const CartActions = CartSlice.actions;

export default CartSlice;
