import { TodaysExpensesStyled } from './Styled-components';
export default function TodaysExpenses() {
  return (
    <TodaysExpensesStyled className='todays-expenses'>
      <span>
        <small>Today's expenses</small>
      </span>
      <p>
        <strong>569 €</strong>
      </p>
    </TodaysExpensesStyled>
  );
}
