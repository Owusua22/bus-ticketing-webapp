// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // User data
    isLoggedIn: false, // Authentication status
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    userLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
