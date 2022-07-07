import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {
    email: '',
    familyName: '',
    givenName: '',
    googleId: '',
    imageUrl: '',
    name: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.currentUser = action.payload
        ? action.payload
        : initialState.currentUser;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
