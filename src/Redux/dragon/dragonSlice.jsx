import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const persistProducts = (dragon) => {
  if (typeof window !== 'undefined') localStorage.setItem('dragon', JSON.stringify(dragon));
};

export const fetchDragons = createAsyncThunk(
  'dragon/fetchDragons', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/dragons');
    const data = await response.json();
    return data;
  },
);
const dragonSlice = createSlice({
  name: 'dragons',
  initialState: { dragon: [], status: 'idle' },
  reducers: {
    DragonStatus: (state, { payload }) => {
    /*eslint-disable */
      const data = state.dragon.map((x) => (x.id === payload ? { ...x, reservation: !x.reservation } : x));
      persistProducts(data)
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
        // persistProducts(data)
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

export default dragonSlice.reducer;
