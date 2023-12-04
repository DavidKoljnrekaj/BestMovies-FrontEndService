import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'; // Import your main component

test('renders learn react link', () => {
  fetch.mockResponse(JSON.stringify({ data: '12345' }));
  render(<App />);
  const linkElement = screen.getByText(/Movie Search/i);
  expect(linkElement).toBeInTheDocument();
});
