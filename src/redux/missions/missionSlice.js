import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APIURL = 'https://api.spacexdata.com/v3/missions';
const ACCEPT_MISSION = 'ACCEPT_MISSION';
const JOINED = 'JOINED';

export const loaded = createAsyncThunk(ACCEPT_MISSION, async () => {
  const response = await fetch(APIURL);
  const data = await response.json();
  return data;
});

//export const joined = createAsyncThunk(JOINED, async ())

const missionSlice = createSlice({
  name: 'spaceTravelers',
  initialState: { mission: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loaded.fulfilled, (state, action) => {
        const datas = [];
        action.payload.map((data) => {
          const {
            mission_id,
            mission_name,
            description,
          } = data;
          datas.push({ mission_id, mission_name, description, join_mission: false })
          return datas;
        })
        return {
          ...state,
          mission: datas,
        }
      }
    );
  },
});

export default missionSlice.reducer;
