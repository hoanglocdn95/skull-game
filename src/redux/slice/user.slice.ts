import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'test',
  nickname: 'test2',
  avatarLink: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state) => {
      console.log(state);
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
