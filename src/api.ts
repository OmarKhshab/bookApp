import { BooksModel } from "./models/booksModel";
    let token = localStorage.token;
    export const url = 'https://reactnd-books-api.udacity.com';

    if (!token) token = localStorage.token = `${new Date()}`;
    const headers = {
        Accept: "application/json",
        Authorization: token,
    };

    export const get = (bookId: string) =>
    fetch(`${url}/books/${bookId}`, { headers })
      .then((res) => res.json())
      .then((data) => data.book);
  
  export const getAll = () =>
    fetch(`${url}/books`, { headers })
      .then((res) => res.json())
      .then((data) => data.books);
  
  export const update = (book: BooksModel, shelf: any) =>
    fetch(`${url}/books/${book.id}`, {
      method: "PUT",headers:{
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({  shelf:shelf }),
    }).then((res) => res.json());
  
  export const search = (query: any, maxResults: any) =>
    fetch(`${url}/search`, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, maxResults }),
    })
      .then((res) => res.json())
      .then((data) => data.books);
  