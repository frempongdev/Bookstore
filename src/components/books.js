import React from 'react';
import Book from './Book';
import '../styles/Books.css';

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
      <form>
        <h3>ADD NEW BOOK</h3>
        <input placeholder="Book Title" type="input" />
        <input placeholder="Author" type="input" />
        <input type="submit" value="Add Book" />
      </form>

    </div>
  </div>
);

export default Books;
