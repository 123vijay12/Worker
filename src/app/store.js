import { configureStore } from '@reduxjs/toolkit';
import userAuthSlice from './actions/userAuthSlice';
import userSlice from './actions/userSlice';


const store = configureStore({
  reducer: {
    auth: userAuthSlice,
    user:userSlice
  },
});

export default store;
