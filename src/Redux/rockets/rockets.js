import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'; 

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rockets/retrieveRockets', async () => {
  const response = await fetch(apiUrl);
  const rocketList = await response.json();
  return rocketList;
});
const initialState = [];
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => current(state).map((rocket) => {
      if (rocket.rocket_id === action.payload) {
        return { ...rocket, active: !rocket.active };
      }
      return rocket;
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => action.payload);
  },
});

const { actions, reducer } = rocketsSlice;
const { reserveRocket } = actions;
export { actions, getRockets, reserveRocket };
export default reducer;
