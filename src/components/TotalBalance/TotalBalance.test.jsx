import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TotalBalance from './TotalBalance';

describe('<TotalBalance />', () => {
  test('renders the TotalBalance component', () => {
    render(<TotalBalance />);
    const balanceText = screen.getByText(/Total balance/i);
    const balanceNumber = screen.getByText(/€/i);
    const leftArrow = screen.getByAltText(/left-arrow/i);
    const rightArrow = screen.getByAltText(/right-arrow/i);

    expect(balanceText).toBeInTheDocument;
    expect(balanceNumber).toBeInTheDocument;
    expect(leftArrow).toBeInTheDocument;
    expect(rightArrow).toBeInTheDocument;
  });
});
