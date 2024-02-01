import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "test",
};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

// Selectors
export const selectToken = (state) => state.userState.token;

export default userSlice.reducer;
