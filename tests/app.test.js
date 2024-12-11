import { render, screen } from '@testing-library/react';
import App from '../src/app/app';

test('renders a heading', () => {
  render(<App />);
  const heading = screen.getByText(/welcome/i);  // Replace with actual text in your app
  expect(heading).toBeInTheDocument();
});