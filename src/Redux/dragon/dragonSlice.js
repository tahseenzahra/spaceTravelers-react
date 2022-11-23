import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk(
  'dragon/fetchDragons',
  async () => {
    try {
      const data = await axios.get('https://api.spacexdata.com/v3/dragons');
      return data.data;
    } catch (error) {
      return error.message;
    }
  },
);

const dragonSlice = createSlice({
  name: 'dragons',
  initialState: { dragon: [], status: 'idle' },
  reducers: {
    DragonStatus: (state, { payload }) => {
    /*eslint-disable */
      const data = state.dragon.map((x) => (x.id === payload ? { ...x, reservation: !x.reservation } : x));
      return {
        ...state,
        dragon: data,
      };
    },
  },
  extraReducers: (Builder) => {
    Builder.addCase(fetchDragons.pending, (state) => ({
      ...state,
      status: 'pending',
    }))
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const data = [];
        /*eslint-disable */
        action.payload.map((x) => {
          const {
            id, flickr_images, description, name,
          } = x;
          data.push({
            id,
            flickr_images,
            description,
            name,
            reservation: false,
          });
          return data;
        });
        return {
          ...state,
          dragon: data,
          status: 'idle',
        };
      })
      .addCase(fetchDragons.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const { DragonStatus } = dragonSlice.actions;
export const selectAllDragons = (state) => state.dragons;

export default dragonSlice.reducer;
