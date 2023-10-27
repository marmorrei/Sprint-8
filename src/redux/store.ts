import { configureStore } from '@reduxjs/toolkit';
import totalBalanceReducer from './totalBalanceSlice';
import todaysExpensesReducer from './todaysExpensesSlice';
import variationYesterdayTodayReducer from './variationYesterdayTodaySlice';
import lastWeekExpensesReducer from './lastWeekExpensesSlice';

export const store = configureStore({
  reducer: {
    totalBalance: totalBalanceReducer,
    todaysExpenses: todaysExpensesReducer,
    variationYesterdayToday: variationYesterdayTodayReducer,
    lastWeekExpenses: lastWeekExpensesReducer,
  },
});

export default store;
