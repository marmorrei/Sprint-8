import LastWeekGraph from '../LastWeekGraph/LastWeekGraph';
import TodaysExpenses from '../TodaysExpenses/TodaysExpenses';
import VariationYesterdayToday from '../VariationYesterdayToday/VariationYesterdayToday';

export default function ExpensesSummary() {
  return (
    <>
      <LastWeekGraph />
      <TodaysExpenses />
      <VariationYesterdayToday />
    </>
  );
}
