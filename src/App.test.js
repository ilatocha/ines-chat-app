import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ines Chat App title', () => {
  render(<App />);
  const linkElement = screen.getByText(/ines chat app/i);
  expect(linkElement).toBeInTheDocument();
});
