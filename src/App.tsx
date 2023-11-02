import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageOptions from './components/LaguageOptions/LanguageOptions';
import TotalBalance from './components/TotalBalance/TotalBalance';
import ExpensesSummary from './components/ExpensesSummary/ExpensesSummary';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeWeekNumber } from './redux/weekNumberSlice';
import { addLastWeekExpenses } from './redux/lastWeekExpensesSlice';
import { changeCurrency } from './redux/currencySlice';
import { changeTodaysExpenses } from './redux/todaysExpensesSlice';

function App(): JSX.Element {
  // States
  const dispatch = useDispatch();

  // Translation
  const { t } = useTranslation();

  // useEffect -> API fetch
  useEffect(() => {
    fetch('https://api.sandapi.com/user_vJkTmX/expenses')
      .then(res => res.json())
      .then(data => {
        const expenses = data.expenses;
        const latestWeek = expenses.find(
          (item: { week: number }) => item.week === expenses.length,
        );
        // Default states after fetch
        dispatch(changeCurrency(latestWeek.currency));
        dispatch(changeWeekNumber(expenses.length));
        dispatch(addLastWeekExpenses(latestWeek.dayly_expenses));
        dispatch(changeTodaysExpenses(latestWeek.dayly_expenses.monday));
      });
  }, []);

  return (
    <div className='app'>
      <LanguageOptions />
      <TotalBalance />
      <ExpensesSummary />
      <footer className='app-footer'>
        <small>
          {t('main.app-footer')}{' '}
          <a href='https://www.flaticon.com/'>www.flaticon.com</a>
        </small>
      </footer>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback='loading'>
      <App />
    </Suspense>
  );
}
