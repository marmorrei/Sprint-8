import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useSelector } from 'react-redux';
import { Store } from '../../redux/store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function LastWeekGraph(): JSX.Element {
  const lastWeekExpenses = useSelector(
    (state: Store) => state.lastWeekExpenses,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const expenses = [
    lastWeekExpenses.monday,
    lastWeekExpenses.tuesday,
    lastWeekExpenses.wednesday,
    lastWeekExpenses.thursday,
    lastWeekExpenses.friday,
    lastWeekExpenses.saturday,
    lastWeekExpenses.sunday,
  ];

  const data = {
    labels,
    datasets: [
      {
        data: expenses,
        backgroundColor: '#ec765c',
        hoverBackgroundColor: '#75B5BE',
        borderRadius: 6,
      },
    ],
  };
  return <Bar data={data} options={options} />;
}
