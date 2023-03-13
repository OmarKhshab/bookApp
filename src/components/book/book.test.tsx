import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Book from './book';
import store from '../../redux/store';
import { BooksModel } from '../../models/booksModel';
import userEvent from '@testing-library/user-event';

test('renders Book ', async () => {
  const bookexample :BooksModel = {
    "title": "The Linux Command Line",
    "subtitle":'test',
    "printType": 'pdf',
    "pageCount": 166,
    "ratingsCount": 1555,
    "maturityRating": "test",
    "allowAnonLogging": true,
    "contentVersion": '15',
    "panelizationSummary": {
      "containsEpubBubbles": true,
      "containsImageBubbles": true,
    },
    "previewLink": "1212",
    "infoLink": "www",
    "canonicalVolumeLink": "11123",
    "language": "English",
    "readingModes":{
      'text': true,
      "image": true,
    },
    "authors": [
        "William E. Shotts, Jr."
    ],
    "publishedDate": "2013-04-30",
   "description": "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    "industryIdentifiers": [
        {
            "type": "ISBN_13",
            "identifier": "9781593273897"
        },
        {
            "type": "ISBN_10",
            "identifier": "1593273894"
        }
    ],
   "categories": [
        "COMPUTERS"
    ],
    "averageRating": 4,
    
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "id": "nggnmAEACAAJ",
    "shelf": "currentlyReading",
    "publisher": "omar",

  };
  
  render(<BrowserRouter><Provider store={store}><Book book={bookexample}/></Provider></BrowserRouter>);
    const list = screen.getByRole("optionlist")
    expect(list).toBeInTheDocument();
});
