/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, addBookToAPI } from '../redux/books/bookSlice';
import '../styles/BookForm.css';

const BookForm = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div>
      <form>
        <h3>ADD NEW BOOK</h3>
        <div className="inputs">
          <input className="titleField" required placeholder="Book Title" type="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="authorField" required placeholder="Author" type="input" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <button
            className="addBtn"
            type="button"
            onClick={() => {
              if (title && author) {
                const category = categories[Math.floor(Math.random() * categories.length)];
                dispatch(addBook({
                  item_id: crypto.randomUUID(), title, author, category,
                }));
                dispatch(addBookToAPI({
                  item_id: crypto.randomUUID(), title, author, category,
                }));
                setTitle('');
                setAuthor('');
              }
            }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
