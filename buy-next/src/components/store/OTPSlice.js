import { createSlice } from "@reduxjs/toolkit";

const OTPSlice = createSlice({
  name: "otp",
  initialState: {
    isEditingPhone: false,
    otpSent: false,
    generatedOtp: "",
    enteredOtp: "",
  },
  reducers: {
    startEditingPhone: (state) => {
      state.isEditingPhone = true;
      state.otpSent = false;
    },
    sendOtp: (state, action) => {
      state.generatedOtp = action.payload;
      state.otpSent = true;
    },
    enterOtp: (state, action) => {
      state.enteredOtp = action.payload;
    },
    resetOtp: () => ({
      isEditingPhone: false,
      otpSent: false,
      generatedOtp: "",
      enteredOtp: "",
    }),
  },
});

export const OTPActions = OTPSlice.actions;
export default OTPSlice;
