import { configureStore } from '@reduxjs/toolkit';

// import dragonReducer from './dragon/dragonSlice';
import missionSlice from './missions/missionSlice';

const root = {
  // dragons: dragonReducer,
  mission: missionSlice,
};

const store = configureStore({ reducer: root });

export default store;
