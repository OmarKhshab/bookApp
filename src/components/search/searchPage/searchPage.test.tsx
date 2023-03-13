import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Search from './searchPage';
import store from '../../../redux/store';

test('renders search Book ', async () => {

  
  render(<BrowserRouter><Provider store={store}><Search/></Provider></BrowserRouter>);
    const contianer = screen.getByRole("search")
    expect(contianer).toBeInTheDocument();
});
