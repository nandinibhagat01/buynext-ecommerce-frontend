import { configureStore } from "@reduxjs/toolkit";
import PCardSlice from "./PCardSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import CartSlice from "./CartSlice";
import CartOperatorsSlice from "./CartOperatorsSlice";
import OTPSlice from "./OTPSlice";
import ProfileSlice from "./ProfileSlice";
import AuthSlice from "./AuthSlice";

const buynextStore = configureStore({
  reducer: {
    items: PCardSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    cart: CartSlice.reducer,
    auth: AuthSlice.reducer,
    cartOperators: CartOperatorsSlice.reducer,
    otp: OTPSlice.reducer,
    profile: ProfileSlice.reducer,
  },
});

buynextStore.subscribe(() => {
  const state = buynextStore.getState();
  localStorage.setItem("reduxState", JSON.stringify(state));
});

export default buynextStore;
