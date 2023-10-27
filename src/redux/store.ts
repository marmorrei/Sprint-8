import { AnyAction, configureStore } from '@reduxjs/toolkit';
import totalBalanceReducer, { TotalBalanceState } from './totalBalanceSlice';
import todaysExpensesReducer, {
  TodaysExpensesState,
} from './todaysExpensesSlice';
import variationYesterdayTodayReducer, {
  VariationYesterdayTodayState,
} from './variationYesterdayTodaySlice';
import lastWeekExpensesReducer, {
  LastWeekExpensesState,
} from './lastWeekExpensesSlice';
import weekNumberReducer, { WeekNumberState } from './weekNumberSlice';
import currencyReducer, { CurrencyState } from './currencySlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

// Global State
export const store: ToolkitStore<Store, AnyAction> = configureStore({
  reducer: {
    totalBalance: totalBalanceReducer,
    todaysExpenses: todaysExpensesReducer,
    variationYesterdayToday: variationYesterdayTodayReducer,
    lastWeekExpenses: lastWeekExpensesReducer,
    weekNumber: weekNumberReducer,
    currency: currencyReducer,
  },
});

export default store;

// Interfaces

export interface Store {
  totalBalance: TotalBalanceState;
  todaysExpenses: TodaysExpensesState;
  variationYesterdayToday: VariationYesterdayTodayState;
  lastWeekExpenses: LastWeekExpensesState;
  weekNumber: WeekNumberState;
  currency: CurrencyState;
}
