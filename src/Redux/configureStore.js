import { configureStore } from '@reduxjs/toolkit';

import dragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
  },
});

export default store;
