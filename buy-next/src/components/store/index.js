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
import WishlistSlice from "./WishlistSlice";

//persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "profile", "cart", "cartOperators", "wishlist"], // ONLY persist auth + profile
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
  wishlist: WishlistSlice.reducer,
});

//persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

// persistor
export const persistor = persistStore(store);
