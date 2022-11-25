import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rockets/retrieveRockets', async () => {
  const response = await fetch(apiUrl);
  const rocketList = await response.json();
  const transformedData = rocketList.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
    reserve: false,
  }));

  return transformedData;
});
const initialState = [];
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => current(state).map((rocket) => {
      if (rocket.id === action.payload) {
        return { ...rocket, reserve: !rocket.reserve };
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
