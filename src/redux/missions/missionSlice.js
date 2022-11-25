import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

export const loaded = createAsyncThunk(
  'missions/loaded',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  },
);

const missionSlice = createSlice({
  name: 'mission',
  initialState: { missions: [] },
  reducers: {
    missionStatus: (state, { payload }) => {
      console.log(current(state))
      const data = current(state).missions.map(
        (item) => (item.id === payload
          ? { ...item, isJoined: !item.isJoined }
          : item),
      );
      localStorage.setItem('mission', JSON.stringify(data));
      return {
        ...state,
        missions: data,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loaded.fulfilled, (state, action) => {
      const data = [];
      action.payload.map((key) => {
        const missionObj = {
          id: key.mission_id,
          name: key.mission_name,
          description: key.description,
          isJoined: false,
        };
        data.push(missionObj);
        return data;
      });
      return {
        ...state,
        missions: data,
      };
    });
  },
});

export const { missionStatus } = missionSlice.actions;
export default missionSlice.reducer;
