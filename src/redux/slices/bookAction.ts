import * as Apis from '../../api';
import { Dispatch } from "redux";
import { bookAction } from './bookSlice'
import { BooksModel } from '../../models/booksModel';


export const getAllBooksApi = () => (dispatch: Dispatch) => {
  Apis.getAll().then(books =>{
    dispatch(bookAction.getAllBooks(books));
  }
  );
};

export const updateBook = (book : BooksModel , shelf : string, allBooks: BooksModel[]) => (dispatch : Dispatch ) => {
  Apis.update(book, shelf).then(() =>{
    let newBooks = [] as BooksModel[];
    newBooks = allBooks.map(item => {
        if (item.id === book.id ) {
          return {...item, shelf: shelf as string};
        }
        return item;
      });
    dispatch(bookAction.updateBook(newBooks));
  }
  );
};

export const searchBooks = (query: string) => (dispatch: Dispatch) => {
  Apis.search(query,20).then(books => {
    if (!Array.isArray(books)) {
      books = [];
    }
    dispatch(bookAction.searchBooks(books));
  });
};

export const getBook = (id: string) => (dispatch: Dispatch) => {
  Apis.get(id).then(book => {
    dispatch(bookAction.getBook(book));
  });
};