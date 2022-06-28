import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state = payload;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
