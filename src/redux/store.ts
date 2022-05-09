import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/slice/user.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
