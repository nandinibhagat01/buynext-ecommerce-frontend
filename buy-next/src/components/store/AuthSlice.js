import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  joined: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.joined = new Date().getFullYear();
    },
    logout: () => initialState,
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;
