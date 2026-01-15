import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: [], // array of product IDs
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((id) => id !== action.payload);
    },
    clearWishlist: () => {
      return [];
    },
  },
});

export const WishlistActions = WishlistSlice.actions;
export default WishlistSlice;
