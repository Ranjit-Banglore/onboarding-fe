import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user_details",
  initialState: {
    userDetails: {
      email: "",
      password: "",
      type: "",
      firstName: "",
      lastName: "",
      mobile: "",
      companyName: "",
      companyAddress: "",
      paymentVolume: "",
      isAuthenticated: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.userDetails = { ...state.userDetails, ...action.payload };
      console.log("updated value-" + JSON.stringify(state.userDetails));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
