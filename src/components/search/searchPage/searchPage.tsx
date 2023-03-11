import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';
import { BooksModel } from '../../../models/booksModel';
import { searchBooks } from '../../../redux/slices/bookAction';
import { useAppSelector } from '../../../redux/slices/bookSlice';
import { Dispatcher } from '../../../redux/store';
import {DebounceInput} from 'react-debounce-input';
import Book from '../../book/book';

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatcher>();
  const searchAllBooks =  (event: any) => {
    dispatch(searchBooks(event.target.value as string));
  }
  
  const searchedBook: BooksModel[] = useAppSelector<BooksModel[]>((state) => state?.books?.searchResultBooks);
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a onClick={()=> navigate("/")}
        className="close-search"
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <DebounceInput
          type="text"
          debounceTimeout={1000}
          placeholder="Search by title, author, or ISBN"
          onChange={searchAllBooks}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
      { searchedBook.map((book: BooksModel) => (
                <Book key={book.id} book={book} />
              ))}
      </ol>
    </div>
  </div>
  );
}

export default Search;
