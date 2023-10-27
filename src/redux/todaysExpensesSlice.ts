import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialState = {
  todaysExpenses: null,
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

interface InitialState {
  todaysExpenses: number | null;
}
