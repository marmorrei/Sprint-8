import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodaysExpensesStyled } from './Styled-components';
import { Store } from '../../redux/store';
import {
  changeDayNumber,
  changeToday,
  changeTodaysExpenses,
} from '../../redux/todaysExpensesSlice';

export default function TodaysExpenses() {
  // States
  const dispatch = useDispatch();
  const lastWeekExpenses = useSelector(
    (state: Store) => state.lastWeekExpenses,
  );
  const { today, dayNumber, todaysExpenses } = useSelector(
    (state: Store) => state.todaysExpenses,
  );
  const { currency } = useSelector((state: Store) => state.currency);

  // useEffect
  useEffect(() => {
    dispatch(changeToday(Object.keys(lastWeekExpenses)[dayNumber]));
  }, [dayNumber]);

  useEffect(() => {
    switch (today) {
      case 'monday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.monday));
        break;
      case 'tuesday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.tuesday));
        break;
      case 'wednesday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.wednesday));
        break;
      case 'thursday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.thursday));
        break;
      case 'friday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.friday));
        break;
      case 'saturday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.saturday));
        break;
      case 'sunday':
        dispatch(changeTodaysExpenses(lastWeekExpenses.sunday));
        break;
    }
  }, [dayNumber, today]);

  // Changes the current day to display
  const handleClick = (navigation: string) => {
    (dayNumber > 0 &&
      navigation === 'previous' &&
      dispatch(changeDayNumber(dayNumber - 1))) ||
      (dayNumber < 6 &&
        navigation === 'next' &&
        dispatch(changeDayNumber(dayNumber + 1)));
  };

  return (
    <TodaysExpensesStyled className='todays-expenses'>
      <span>
        <small>Today's expenses</small>
      </span>
      <p>
        <strong>
          {todaysExpenses} {currency}
        </strong>
      </p>
      <div className='current-day-navigation'>
        <button onClick={() => handleClick('previous')}>
          <img
            src='/src/assets/images/arrow-sm-left-svgrepo-com.svg'
            alt='left-arrow'
          />
        </button>
        <p>{today.toUpperCase()}</p>
        <button onClick={() => handleClick('next')}>
          <img
            src='/src/assets/images/arrow-sm-right-svgrepo-com.svg'
            alt='right-arrow'
          />
        </button>
      </div>
    </TodaysExpensesStyled>
  );
}
