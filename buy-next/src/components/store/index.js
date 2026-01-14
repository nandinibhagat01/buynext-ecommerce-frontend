import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import PCardSlice from "./PCardSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import CartSlice from "./CartSlice";
import CartOperatorsSlice from "./CartOperatorsSlice";
import OTPSlice from "./OTPSlice";
import ProfileSlice from "./ProfileSlice";
import AuthSlice from "./AuthSlice";

//persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile"], // ONLY persist auth + profile
};

//root reducer
const rootReducer = combineReducers({
  items: PCardSlice.reducer,
  fetchStatus: FetchStatusSlice.reducer,
  cart: CartSlice.reducer,
  cartOperators: CartOperatorsSlice.reducer,
  otp: OTPSlice.reducer,
  profile: ProfileSlice.reducer,
  auth: AuthSlice.reducer,
});

//persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
export const store = configureStore({
  reducer: persistedReducer,
});

// persistor
export const persistor = persistStore(store);
