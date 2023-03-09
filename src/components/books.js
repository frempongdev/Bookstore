import React from 'react';
import Book from './Book';
import '../styles/Books.css';
import BookForm from './BookForm';

const Books = () => (
  <div>
    <div>
      <ul className="bookList">
        <li><Book title="The Hunger Games" author="Suzanne Collins" /></li>
        <li><Book title="Dune" author="Frank Herbert" /></li>
        <li><Book title="Capital in the 21st Century" author="Suzanne Collins" /></li>
      </ul>
    </div>
    <div>
      <BookForm />
    </div>
  </div>
);

export default Books;
