import { createSlice } from '@reduxjs/toolkit';

export const dragonSlice = createSlice({
  name: 'dragon',
  initialState: { dragon: [{ name: 'ashe' }, { name: 'ashe' }, { name: 'ashe' }, { name: 'ashe' }] },
  reducers: {
    reserveDragon(state, action) {
      const { dragon } = state;
      return dragon === action.payload;
    },
  },

});

const dragonReducer = dragonSlice.reducer;
export default dragonReducer;
export const { reserveDragon } = dragonSlice.actions;
