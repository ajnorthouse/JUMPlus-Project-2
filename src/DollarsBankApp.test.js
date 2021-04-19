import { render, screen } from '@testing-library/react';
import DollarsBankApp from './DollarsBankApp';

test('renders learn react link', () => {
  render(<DollarsBankApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
