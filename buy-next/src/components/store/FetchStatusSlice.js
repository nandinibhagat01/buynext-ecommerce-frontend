import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "FetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchDone: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchDone: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});

export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;
