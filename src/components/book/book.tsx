import React from 'react';
import { useDispatch } from 'react-redux';
import '../../App.css';
import { BooksModel } from '../../models/booksModel';
import { getBook, updateBook } from '../../redux/slices/bookAction';
import { useAppSelector } from '../../redux/slices/bookSlice';
import { Dispatcher } from '../../redux/store';
import { useNavigate } from 'react-router-dom';

interface Props {
  book: BooksModel;
  }
const Book : React.FC<Props> = ({ book }) => {
  const navigate = useNavigate();
  const allBooks: BooksModel[] = useAppSelector<BooksModel[]>((state) => state?.books?.books);
  const dispatch = useDispatch<Dispatcher>();
  const navigateTodetails = () => {
    navigate(`/${book.id}`);
    dispatch(getBook(book.id))
  }
  const changeShelf = (event: any) => {
    const shelf = event.target.value as string;
    dispatch(updateBook(book,shelf,allBooks))
  };
  return (
    <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            onClick={navigateTodetails}
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks?.thumbnail || ""
              }")`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={book?.shelf} onChange={changeShelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
    </div>
  );
}

export default Book;
