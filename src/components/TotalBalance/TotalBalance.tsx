import { useDispatch, useSelector } from 'react-redux';
import { TotalBalanceStyled } from './Styled-components';
import { Store } from '../../redux/store';
import { useEffect } from 'react';
import { changeTotalBalance } from '../../redux/totalBalanceSlice';

export default function TotalBalance(): JSX.Element {
  const dispatch = useDispatch();
  const lastWeekExpenses = useSelector(
    (state: Store) => state.lastWeekExpenses,
  );
  const totalBalance = useSelector((state: Store) => state.totalBalance);
  const currency = useSelector((state: Store) => state.currency);

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

  return (
    <TotalBalanceStyled>
      <div className='balance'>
        <span>
          <small>Total balance</small>
        </span>
        <p>
          <strong>
            {totalBalance.totalBalance} {currency.currency}
          </strong>
        </p>
      </div>
      <div className='navigation-arrows'>
        <img
          src='/src/assets/images/arrow-sm-left-svgrepo-com.svg'
          alt='left-arrow'
        />
        <img
          src='/src/assets/images/arrow-sm-right-svgrepo-com.svg'
          alt='right-arrow'
        />
      </div>
    </TotalBalanceStyled>
  );
}
