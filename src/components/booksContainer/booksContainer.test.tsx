import React from 'react';
import { render, screen } from '@testing-library/react';
import BookShelf from './booksContainer';

test('renders learn react link', () => {
  render(<BookShelf />);
});
