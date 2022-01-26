import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userName: null,
    userEmail: null,
  },
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.value.userName = action.payload.userName;
      state.value.userEmail = action.payload.userEmail;
    },
    setUserLogoutState: (state, action) => {
      state.value.userName = null;
      state.value.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

export const selectUserName = (state) => state.value.userName;
export const selectUserEmail = (state) => state.value.userEmail;
export default userSlice.reducer;
