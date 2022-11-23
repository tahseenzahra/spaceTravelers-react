import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APIURL = 'https://api.spacexdata.com/v3/missions';
const ACCEPT_MISSION = 'ACCEPT_MISSION';

export const loaded = createAsyncThunk(ACCEPT_MISSION, async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
});

const missionSlice = createSlice({
  name: 'spaceTravelers',
  initialState: { missions: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loaded.fulfilled, (state, action) => {
        console.log(action.payload);
        state.missions = action.payload
      }
    //  )
    //  .addCase(
    //    loaded.pending, (state) => ({
    //    ...state, status: "pending"
    //  })
    );
  },
});

export default missionSlice.reducer;
