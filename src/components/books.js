import React from 'react';
import Book from './Book';
import '../styles/Books.css';
import BookForm from './BookForm';
import bookArray from './booksource';

const Books = () => (
  <div>
    <div>
      <ul className="bookList">
        {bookArray.map((book) => (
          <li key={book.id}>
            <Book
              title={book.title}
              author={book.author}
            />
          </li>
        ))}
      </ul>
    </div>
    <div>
      <BookForm />
    </div>
  </div>
);

export default Books;
