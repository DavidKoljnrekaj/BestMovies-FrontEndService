import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Import your main component

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movie Search/i);
  expect(linkElement).toBeInTheDocument();
});
