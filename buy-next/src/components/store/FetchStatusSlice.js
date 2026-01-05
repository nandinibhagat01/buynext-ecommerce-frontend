import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchDone: (state) => {
      state.fetchDone = true;
      state.currentlyFetching = false;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
    // markFetchDone: (state) => {
    //   return (state.fetchDone = true);
    // },
    // markFetchingStarted: (state) => {
    //   return (state.currentlyFetching = true);
    // },
    // markFetchingFinished: (state) => {
    //   return (state.currentlyFetching = false);
    // },
  },
});

export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;
