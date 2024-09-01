import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucks } from './operations';

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTrucks.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

// export const { activateLoader } = trucksSlice.actions;

export const trucksReducer = trucksSlice.reducer;
