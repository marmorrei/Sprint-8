import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders the App component', () => {
    render(<App />);
    const app = screen.container.firstChild.toHaveClass('app');

    expect(app).toBeInTheDocument;
  });
});
