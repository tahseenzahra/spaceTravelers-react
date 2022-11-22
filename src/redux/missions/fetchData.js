import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APIURL = 'https://api.spacexdata.com/v3/missions';
const ACCEPT_MISSION = 'ACCEPT_MISSION';

export const loaded = createAsyncThunk(ACCEPT_MISSION, async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
});

console.log(loaded);

const missionSlice = createSlice({
  name: 'spaceTravelers',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loaded.fulfilled, (state, action) => action.payload,
    );
  },
});

export default missionSlice.reducer;
