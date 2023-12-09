import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Import your main component

test('renders learn react link', () => {
  fetch.mockResponse(JSON.stringify({ data: '12345' }));
  render(<App />);
  const linkElement = screen.getByText(/Search movies:/i);
  expect(linkElement).toBeInTheDocument();
});
