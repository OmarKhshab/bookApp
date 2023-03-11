import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import BookShelfs from './components/booksContainer/booksContainer';
import Search from './components/search/searchPage/searchPage';
import BookDetails from './components/book/bookDetails/bookDetails';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<BookShelfs/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/:id" element={<BookDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
{/* <Routes>
<Route exact path="/" element={<StaticTodo/>} />
<Route exact path="/search" element={<Home/>} />
</Routes> */}