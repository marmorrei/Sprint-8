import { createSlice } from '@reduxjs/toolkit';

const initialState: WeekNumberState = {
  weekNumber: 0,
};

export const weekNumberSlice = createSlice({
  name: 'weekNumber',
  initialState,
  reducers: {
    changeWeekNumber: (state, action) => {
      state.weekNumber = action.payload;
    },
  },
});

export const { changeWeekNumber } = weekNumberSlice.actions;
export default weekNumberSlice.reducer;

// Interfaces

export interface WeekNumberState {
  weekNumber: number;
}
