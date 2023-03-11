import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../../App.css';
import { BooksModel } from '../../models/booksModel';
import { getAllBooksApi } from '../../redux/slices/bookAction';
import { useAppSelector } from '../../redux/slices/bookSlice';
import { Dispatcher } from '../../redux/store';
import Book from '../book/book';
import { useNavigate } from 'react-router-dom';
function BookShelfs() {
  const navigate = useNavigate();  
  const dispatch = useDispatch<Dispatcher>();
  useEffect(() => {
    dispatch(getAllBooksApi())
  }, [dispatch]);
  const setShowSearchpage = ()=> {}
  const allBooks: BooksModel[] = useAppSelector<BooksModel[]>((state) => state?.books?.books);
  const shelfies = {
    currentlyReading: allBooks.filter(book => book.shelf === "currentlyReading"),
    wantToRead: allBooks.filter(book => book.shelf === "wantToRead"),
    read: allBooks.filter(book => book.shelf === "read")
  }
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { shelfies?.currentlyReading?.map((book: BooksModel) => (
                <Book key={book.id} book={book} />
              ))}
          </ol>
        </div>
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { shelfies?.wantToRead?.map((book: BooksModel) => (
                <Book key={book.id} book={book} />
              ))}
          </ol>
        </div>
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { shelfies?.read?.map((book: BooksModel) => (
                <Book key={book.id} book={book} />
              ))}
          </ol>
        </div>
      </div>
      </div>
    </div>
    <div className="open-search">
            <a onClick={()=> navigate("/search")}>Add a book</a>
          </div>
    </div>
  );
}

export default BookShelfs;
