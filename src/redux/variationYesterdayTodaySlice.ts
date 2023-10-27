import { createSlice } from '@reduxjs/toolkit';

const initialState: VariationYesterdayTodayState = {
  variationYesterdayToday: 0,
};

export const variationYesterdayTodaySlice = createSlice({
  name: 'variationYesterdayToday',
  initialState,
  reducers: {
    changeVariation: (state, action) => {
      state.variationYesterdayToday = action.payload;
    },
  },
});

export const { changeVariation } = variationYesterdayTodaySlice.actions;
export default variationYesterdayTodaySlice.reducer;

// Interfaces

export interface VariationYesterdayTodayState {
  variationYesterdayToday: number;
}
