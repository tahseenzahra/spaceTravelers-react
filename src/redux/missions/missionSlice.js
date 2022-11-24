import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loaded = createAsyncThunk(
  'missions/loaded',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      return response.data;
    } catch (error) {
      return error.message;
    }
  });

const missionSlice = createSlice({
  name: 'mission',
  initialState: { mission: [] },
  reducers: {
    missionStatus: (state, { payload }) => {
      const data = state.mission.map((x) => (x.mission_id === payload ? { ...x, isJoined: !x.isJoined } : x));
      localStorage.setItem('mission', JSON.stringify({ data }))
      return {
        ...state,
        mission: data,
      };
    },
  },
  extraReducers: (builder) => {
    //builder.addCase(loaded.pending, (state) => ({
    //  ...state,
    //  status: 'pending',
    //}))
      builder.addCase(loaded.fulfilled, (state, action) => {
        let mission = [];
        action.payload.map((key) => {
          const missionObj = {
            id: key.mission_id,
            name: key.mission_name,
            description: key.description,
            isJoined: false,
          };
          mission.push(missionObj);
        },
        )
        return {
          ...state,
          mission,
        };
      }
      )
      //.addCase(loaded.rejected, (state, { error }) => ({
      //  ...state,
      //  status: error,
      //}));
  },
});

export const { missionStatus } = missionSlice.actions;
export default missionSlice.reducer;
