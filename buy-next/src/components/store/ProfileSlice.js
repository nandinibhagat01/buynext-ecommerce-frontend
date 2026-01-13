import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  avatar: "",
  phone: "",
  phoneVerified: false,
  address: "",
  address_opt: "",
  gender: "",
  language: "",
  occupation: "",
  city: "",
  state: "",
  zip: "",
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updatePhone: (state, action) => {
      state.phone = action.payload;
      state.phoneVerified = false;
    },
    verifyPhone: (state) => {
      state.phoneVerified = true;
    },
    clearProfile: () => initialState,
  },
});
export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;
