import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from '../utils/testUtils';

test('renders learn react link', () => {
  renderWithProviders(<App />)
  const linkElement = screen.getByText(/coding exercise/i);
  expect(linkElement).toBeInTheDocument();
});
