import { createSlice } from "@reduxjs/toolkit";

const PCardSlice= createSlice({
  name: "ProductCards",
  initialState: [],
  reducers:{
    addInitialProducts:(state, action)=>{
      return action.payload;
    }
  }


})
export const PCardActions=PCardSlice.actions;

export default PCardSlice;