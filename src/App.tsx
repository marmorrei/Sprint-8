import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageOptions from './components/LaguageOptions/LanguageOptions';
import TotalBalance from './components/TotalBalance/TotalBalance';
import ExpensesSummary from './components/ExpensesSummary/ExpensesSummary';
import { useDispatch, useSelector } from 'react-redux';
import { changeTotalOfWeeks } from './redux/weekNumberSlice';
import { addLastWeekExpenses } from './redux/lastWeekExpensesSlice';
import { changeCurrency } from './redux/currencySlice';
import { changeTodaysExpenses } from './redux/todaysExpensesSlice';
import { Store } from './redux/store';

function App(): JSX.Element {
  // States
  const dispatch = useDispatch();
  const { weekNumber } = useSelector((state: Store) => state.weekNumber);

  // Translation
  const { t } = useTranslation();

  // useEffect -> API fetch
  useEffect(() => {
    fetch('https://api.sandapi.com/user_vJkTmX/expenses')
      .then(res => res.json())
      .then(data => {
        const expenses = data.expenses;
        const chosenWeek = expenses.find(
          (item: { week: number }) => item.week === weekNumber,
        );
        // Default states after fetch
        dispatch(changeCurrency(chosenWeek.currency));
        dispatch(changeTotalOfWeeks(expenses.length));
        dispatch(addLastWeekExpenses(chosenWeek.dayly_expenses));
        dispatch(changeTodaysExpenses(chosenWeek.dayly_expenses.monday));
      });
  }, [weekNumber]);

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
