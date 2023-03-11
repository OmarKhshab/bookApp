import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from './book';

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
