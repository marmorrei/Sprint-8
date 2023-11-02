import { createSlice } from '@reduxjs/toolkit';

const initialState: VariationYesterdayTodayState = {
  yesterdaysExpenses: 0,
  variationYesterdayToday: 0,
};

export const variationYesterdayTodaySlice = createSlice({
  name: 'variationYesterdayToday',
  initialState,
  reducers: {
    changeYesterdaysExpenses: (state, action) => {
      state.yesterdaysExpenses = action.payload;
    },
    changeVariation: (state, action) => {
      state.variationYesterdayToday = action.payload;
    },
  },
});

export const { changeYesterdaysExpenses, changeVariation } =
  variationYesterdayTodaySlice.actions;
export default variationYesterdayTodaySlice.reducer;

// Interfaces

export interface VariationYesterdayTodayState {
  yesterdaysExpenses: number;
  variationYesterdayToday: number;
}
