import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    user: null,
  },
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.value.user = action.payload;
    },
    setUserLogoutState: (state) => {
      state.value.user = "it didnt work";
    },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;

export const selectUser = (state) => state.value.user;
export default userSlice.reducer;
