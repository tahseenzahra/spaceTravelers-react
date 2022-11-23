import { configureStore } from '@reduxjs/toolkit';

import dragonReducer from './dragon/dragonSlice';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    rockets: rocketReducer,
  },
});

export default store;
