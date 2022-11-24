import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APIURL = 'https://api.spacexdata.com/v3/missions';

export const loaded = createAsyncThunk(
  'missions/loaded',
  async () => {
    try {
      const response = await axios.get(APIURL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

  //if (localStorage.mission === undefined)
const missionSlice = createSlice({
  name: 'missions',
  initialState: { mission: [], status: 'idle' },
  reducers: {
    missionStatus: (state, { payload }) => {
      const data = state.mission.map((x) => (x.mission_id === payload ? { ...x, isJoined: !x.isJoined } : x));
      localStorage.setItem('mission', JSON.stringify({data}))
      return {
        ...state,
        mission: data,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loaded.pending, (state) => ({
      ...state,
      status: 'pending',
    }))
      .addCase(loaded.fulfilled, (state, action) => {
        let missionData = [];
        action.payload.map((mission) => {
          const { description, mission_id, mission_name } = mission;
          missionData.push({
            description,
            mission_id,
            mission_name,
            isJoined: false,
          });
          return missionData;
        },
        //console.log(JSON.stringify(missionData)),
        //localStorage.setItem('mission', JSON.stringify({missionData}))
        )
      }
      )
      .addCase(loaded.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const { missionStatus } = missionSlice.actions;
export default missionSlice.reducer;
