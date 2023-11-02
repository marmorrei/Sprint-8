import { useTranslation } from 'react-i18next';
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
  // States
  const lastWeekExpenses = useSelector(
    (state: Store) => state.lastWeekExpenses,
  );

  // Translation
  const { t } = useTranslation();

  // Graph
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

  const labels = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const translatedLabels = labels.map(label => t(`main.graph-labels.${label}`));

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
    labels: translatedLabels,
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
