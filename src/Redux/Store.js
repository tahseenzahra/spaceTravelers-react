import { configureStore } from '@reduxjs/toolkit';

import dragonReducer from './dragon/dragonSlice';
import rocketReducer from './rockets/rockets';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    dragons: dragonReducer,
    rockets: rocketReducer,
    mission: missionSlice,
  },
});

export default store;
