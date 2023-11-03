import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { TotalBalanceStyled } from './Styled-components';
import { Store } from '../../redux/store';
import { useEffect } from 'react';
import { changeTotalBalance } from '../../redux/totalBalanceSlice';
import { changeWeekNumber } from '../../redux/weekNumberSlice';

export default function TotalBalance(): JSX.Element {
  // States
  const dispatch = useDispatch();
  const lastWeekExpenses = useSelector(
    (state: Store) => state.lastWeekExpenses,
  );
  const { totalBalance } = useSelector((state: Store) => state.totalBalance);
  const { currency } = useSelector((state: Store) => state.currency);
  const { weekNumber, totalOfWeeks } = useSelector(
    (state: Store) => state.weekNumber,
  );

  // Translation
  const { t } = useTranslation();

  // useEffect
  useEffect(() => {
    const total: number =
      lastWeekExpenses.monday +
      lastWeekExpenses.tuesday +
      lastWeekExpenses.wednesday +
      lastWeekExpenses.thursday +
      lastWeekExpenses.friday +
      lastWeekExpenses.saturday +
      lastWeekExpenses.sunday;

    dispatch(changeTotalBalance(total));
  }, [lastWeekExpenses]);

  // Changes the current week to display
  const handleClick = (navigation: string) => {
    (weekNumber > 0 &&
      navigation === 'previous' &&
      dispatch(changeWeekNumber(weekNumber - 1))) ||
      (weekNumber < totalOfWeeks &&
        navigation === 'next' &&
        dispatch(changeWeekNumber(weekNumber + 1)));
  };

  return (
    <TotalBalanceStyled className='total-balance'>
      <div className='balance'>
        <span>
          <small>{t('main.total-balance')}</small>
        </span>
        <p>
          <strong>
            {totalBalance} {currency}
          </strong>
        </p>
      </div>
      <div className='week-year'>
        <span>
          <small>{t('main.year')}: 2023</small>
        </span>
        <p>
          <strong>
            {t('main.week')}: {weekNumber}
          </strong>
        </p>
      </div>
      <div className='navigation-arrows'>
        <button onClick={() => handleClick('previous')}>
          <img
            src='/assets/images/arrow-sm-left-svgrepo-com.svg'
            alt='left-arrow'
          />
        </button>
        <button onClick={() => handleClick('next')}>
          <img
            src='/assets/images/arrow-sm-right-svgrepo-com.svg'
            alt='right-arrow'
          />
        </button>
      </div>
    </TotalBalanceStyled>
  );
}
