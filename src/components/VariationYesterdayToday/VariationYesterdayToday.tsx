import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { VariationYesterdayTodayStyled } from './Styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../redux/store';
import {
  changeYesterdaysExpenses,
  changeVariation,
} from '../../redux/variationYesterdayTodaySlice';

export default function VariationYesterdayToday() {
  // States
  const lastWeekExpenses = useSelector(
    (state: Store) => state.lastWeekExpenses,
  );
  const { dayNumber, todaysExpenses } = useSelector(
    (state: Store) => state.todaysExpenses,
  );
  const { yesterdaysExpenses, variationYesterdayToday } = useSelector(
    (state: Store) => state.variationYesterdayToday,
  );
  const dispatch = useDispatch();

  // Translation
  const { t } = useTranslation();

  // useEffect
  useEffect(() => {
    switch (dayNumber) {
      case 1:
        dispatch(changeYesterdaysExpenses(lastWeekExpenses.monday));
        break;
      case 2:
        dispatch(changeYesterdaysExpenses(lastWeekExpenses.tuesday));
        break;
      case 3:
        dispatch(changeYesterdaysExpenses(lastWeekExpenses.wednesday));
        break;
      case 4:
        dispatch(changeYesterdaysExpenses(lastWeekExpenses.thursday));
        break;
      case 5:
        dispatch(changeYesterdaysExpenses(lastWeekExpenses.friday));
        break;
      case 6:
        dispatch(changeYesterdaysExpenses(lastWeekExpenses.saturday));
        break;
    }
  }, [dayNumber]);

  useEffect(() => {
    dispatch(
      changeVariation(
        parseFloat(
          ((todaysExpenses * 100) / yesterdaysExpenses - 100).toFixed(2),
        ),
      ),
    );
  }, [todaysExpenses]);

  return (
    <VariationYesterdayTodayStyled className='variation-yesterday-today'>
      <p>
        <strong>
          {(dayNumber === 0 && t('main.consult')) ||
            (variationYesterdayToday > 0 && `+${variationYesterdayToday}%`) ||
            (variationYesterdayToday < 0 && `${variationYesterdayToday}%`)}
        </strong>
      </p>
      <span>
        <small>{t('main.comparison')}</small>
      </span>
    </VariationYesterdayTodayStyled>
  );
}
