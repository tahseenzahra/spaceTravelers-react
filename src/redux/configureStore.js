import { configureStore } from '@reduxjs/toolkit';

import dragonReducer from './dragon/dragonSlice';
import missionSlice from './missions';

const root = {
  dragons: dragonReducer,
  missions: missionSlice,
}

const store = configureStore({ reducer: root });

export default store;