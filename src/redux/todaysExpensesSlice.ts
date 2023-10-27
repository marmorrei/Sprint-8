import { createSlice } from '@reduxjs/toolkit';

const initialState: TodaysExpensesState = {
  todaysExpenses: 0,
};

export const todaysExpensesSlice = createSlice({
  name: 'todaysExpenses',
  initialState,
  reducers: {
    changeTodaysExpenses: (state, action) => {
      state.todaysExpenses = action.payload;
    },
  },
});

export const { changeTodaysExpenses } = todaysExpensesSlice.actions;
export default todaysExpensesSlice.reducer;

// Interfaces

export interface TodaysExpensesState {
  todaysExpenses: number;
}
