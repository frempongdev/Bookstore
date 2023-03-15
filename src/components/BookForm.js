/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const BookForm = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div>
      <form>
        <h3>ADD NEW BOOK</h3>
        <input required placeholder="Book Title" type="input" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input required placeholder="Author" type="input" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button
          type="button"
          onClick={() => {
            if (title && author) {
              const item_id = books.length + 1;
              dispatch(addBook({ item_id, title, author }));
              setTitle('');
              setAuthor('');
            }
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
