import { useTranslation } from 'react-i18next';
import LastWeekGraph from '../LastWeekGraph/LastWeekGraph';
import TodaysExpenses from '../TodaysExpenses/TodaysExpenses';
import VariationYesterdayToday from '../VariationYesterdayToday/VariationYesterdayToday';
import { ExpensesSummaryStyled } from './Styled-components';

export default function ExpensesSummary() {
  // Translation
  const { t } = useTranslation();
  return (
    <ExpensesSummaryStyled className='expenses-summary'>
      <h1>{t('main.expenses-title')}</h1>
      <LastWeekGraph />
      <div className='separation-line'></div>
      <footer>
        <TodaysExpenses />
        <VariationYesterdayToday />
      </footer>
    </ExpensesSummaryStyled>
  );
}
