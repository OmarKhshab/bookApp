import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import BookShelfs from './booksContainer';

test('renders Book contianer ', async () => {

  
  render(<BrowserRouter><Provider store={store}><BookShelfs/></Provider></BrowserRouter>);
    const contianer = screen.getByRole("container")
    expect(contianer).toBeInTheDocument();
});
