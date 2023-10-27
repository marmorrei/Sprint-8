import { createSlice } from '@reduxjs/toolkit';

const initialState: LastWeekExpensesState = {
  monday: 0,
  tuesday: 0,
  wednesday: 0,
  thursday: 0,
  friday: 0,
  saturday: 0,
  sunday: 0,
};

export const lastWeekExpensesSlice = createSlice({
  name: 'lastWeekExpenses',
  initialState,
  reducers: {
    addLastWeekExpenses: (state, action) => {
      const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
        action.payload;
      state.monday = monday;
      state.tuesday = tuesday;
      state.wednesday = wednesday;
      state.thursday = thursday;
      state.friday = friday;
      state.saturday = saturday;
      state.sunday = sunday;
    },
  },
});

export const { addLastWeekExpenses } = lastWeekExpensesSlice.actions;
export default lastWeekExpensesSlice.reducer;

// Interfaces

export interface LastWeekExpensesState {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}
