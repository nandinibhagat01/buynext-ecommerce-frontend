import { createSlice } from "@reduxjs/toolkit";

const CartOperatorsSlice = createSlice({
  name: "cartOperators",
  initialState: { quantities: {} }, // { [itemId]: qty }
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] || 1) + 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.quantities[id] > 1) {
        state.quantities[id]--;
      }
    },
    initializeQty: (state, action) => {
      const id = action.payload;
      if (!state.quantities[id]) {
        state.quantities[id] = 1;
      }
    },
  },
});
export const CartOperatorsActions = CartOperatorsSlice.actions;

export default CartOperatorsSlice;
