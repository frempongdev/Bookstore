/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import '../styles/Books.css';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/bookSlice';

const Books = () => {
  const { books, status } = useSelector((state) => state.books);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (status === 'idle' || !books.length) {
    return (
      <div>
        <header>
          <h2>Waiting for Books...</h2>
        </header>
        <BookForm />
      </div>
    );
  }

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
                category={categories[Math.floor(Math.random() * categories.length)]}
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
