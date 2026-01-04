import { configureStore } from "@reduxjs/toolkit";
import PCardSlice from "./PCardSlice";
import FetchStatusSlice from "./FetchStatusSlice";

const buynextStore = configureStore({
  reducer: {
    items: PCardSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
  },
});

export default buynextStore;
