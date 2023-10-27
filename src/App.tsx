import './App.css';
import TotalBalance from './components/TotalBalance/TotalBalance';
import ExpensesSummary from './components/ExpensesSummary/ExpensesSummary';

export default function App(): JSX.Element {
  return (
    <div className='app'>
      <TotalBalance />
      <ExpensesSummary />
    </div>
  );
}
