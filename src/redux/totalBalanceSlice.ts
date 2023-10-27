import { createSlice } from '@reduxjs/toolkit';

const initialState: initialState = {
  weeklyTotal: null,
};

export const totalBalanceSlice = createSlice({
  name: 'totalBalance',
  initialState,
  reducers: {
    changeTotalBalance: (state, action) => {
      state.weeklyTotal = action.payload;
    },
  },
});

export const { changeTotalBalance } = totalBalanceSlice.actions;
export default totalBalanceSlice.reducer;

// Interfaces

interface initialState {
  weeklyTotal: number | null;
}
