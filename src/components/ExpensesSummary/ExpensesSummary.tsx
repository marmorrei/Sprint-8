import LastWeekGraph from '../LastWeekGraph/LastWeekGraph';
import TodaysExpenses from '../TodaysExpenses/TodaysExpenses';
import VariationYesterdayToday from '../VariationYesterdayToday/VariationYesterdayToday';
import { ExpensesSummaryStyled } from './Styled-components';

export default function ExpensesSummary() {
  return (
    <ExpensesSummaryStyled className='expenses-summary'>
      <h1>Expenses - Last Week</h1>
      <LastWeekGraph />
      <div className='separation-line'></div>
      <footer>
        <TodaysExpenses />
        <VariationYesterdayToday />
      </footer>
    </ExpensesSummaryStyled>
  );
}
