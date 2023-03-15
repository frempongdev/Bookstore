/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import '../styles/Books.css';
import BookForm from './BookForm';

const Books = () => {
  const {
    books,
  } = useSelector((state) => state.books);

  return (
    <div>
      <div>
        <ul className="bookList">
          {books.map((book) => (
            <li key={book.item_id}>
              <Book
                title={book.title}
                author={book.author}
                id={book.item_id}
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
};

export default Books;
