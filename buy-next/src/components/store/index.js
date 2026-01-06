import { configureStore } from "@reduxjs/toolkit";
import PCardSlice from "./PCardSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import CartSlice from "./CartSlice";

const buynextStore = configureStore({
  reducer: {
    items: PCardSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export default buynextStore;
