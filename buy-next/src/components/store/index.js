import { configureStore } from "@reduxjs/toolkit";
import PCardSlice from "./PCardSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import CartSlice from "./CartSlice";
import CartOperatorsSlice from "./CartOperatorsSlice";

const buynextStore = configureStore({
  reducer: {
    items: PCardSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    cart: CartSlice.reducer,
    cartOperators: CartOperatorsSlice.reducer,
  },
});

export default buynextStore;
