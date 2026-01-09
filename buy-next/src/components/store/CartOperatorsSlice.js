import { createSlice } from "@reduxjs/toolkit";

const CartOperatorsSlice = createSlice({
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
});
export const CartOperatorsActions = CartOperatorsSlice.actions;

export default CartOperatorsSlice;
