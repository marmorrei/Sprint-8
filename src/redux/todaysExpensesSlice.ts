import { createSlice } from '@reduxjs/toolkit';

const initialState: TodaysExpensesState = {
  today: 'monday',
  dayNumber: 0,
  todaysExpenses: 0,
};

export const todaysExpensesSlice = createSlice({
  name: 'todaysExpenses',
  initialState,
  reducers: {
    changeToday: (state, action) => {
      state.today = action.payload;
    },
    changeDayNumber: (state, action) => {
      state.dayNumber = action.payload;
    },
    changeTodaysExpenses: (state, action) => {
      state.todaysExpenses = action.payload;
    },
  },
});

export const { changeToday, changeDayNumber, changeTodaysExpenses } =
  todaysExpensesSlice.actions;
export default todaysExpensesSlice.reducer;

// Interfaces

export interface TodaysExpensesState {
  today: string;
  dayNumber: number;
  todaysExpenses: number;
}
