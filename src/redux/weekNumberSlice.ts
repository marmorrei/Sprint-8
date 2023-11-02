import { createSlice } from '@reduxjs/toolkit';

const initialState: WeekNumberState = {
  weekNumber: 1,
  totalOfWeeks: 0,
};

export const weekNumberSlice = createSlice({
  name: 'weekNumber',
  initialState,
  reducers: {
    changeWeekNumber: (state, action) => {
      state.weekNumber = action.payload;
    },
    changeTotalOfWeeks: (state, action) => {
      state.totalOfWeeks = action.payload;
    },
  },
});

export const { changeWeekNumber, changeTotalOfWeeks } = weekNumberSlice.actions;
export default weekNumberSlice.reducer;

// Interfaces

export interface WeekNumberState {
  weekNumber: number;
  totalOfWeeks: number;
}
