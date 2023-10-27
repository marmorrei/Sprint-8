import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  variationYesterdayToday: null,
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

interface InitialState {
  variationYesterdayToday: number | null;
}
