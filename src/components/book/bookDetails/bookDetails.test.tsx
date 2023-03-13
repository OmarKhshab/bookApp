import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import BookDetails from './bookDetails';
import store from '../../../redux/store';

test('renders app', () => {
  render(<BrowserRouter><Provider store={store}><BookDetails /></Provider></BrowserRouter>);
  const linkElement = screen.getByRole('bookDetailedView');
  expect(linkElement).toBeInTheDocument();
});
