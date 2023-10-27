import './App.css';
import TotalBalance from './components/TotalBalance/TotalBalance';
import ExpensesSummary from './components/ExpensesSummary/ExpensesSummary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeWeekNumber } from './redux/weekNumberSlice';
import { addLastWeekExpenses } from './redux/lastWeekExpensesSlice';
import { changeCurrency } from './redux/currencySlice';

export default function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.sandapi.com/user_vJkTmX/expenses')
      .then(res => res.json())
      .then(data => {
        const expenses = data.expenses;
        const latestWeek = expenses.find(
          (item: { week: number }) => item.week === expenses.length,
        );
        dispatch(changeCurrency(latestWeek.currency));
        dispatch(changeWeekNumber(expenses.length));
        dispatch(addLastWeekExpenses(latestWeek.dayly_expenses));
      });
  }, []);

  return (
    <div className='app'>
      <TotalBalance />
      <ExpensesSummary />
    </div>
  );
}
