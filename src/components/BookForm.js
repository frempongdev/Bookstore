import React from 'react';

const BookForm = () => (
  <div>
    <form>
      <h3>ADD NEW BOOK</h3>
      <input placeholder="Book Title" type="input" />
      <input placeholder="Author" type="input" />
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default BookForm;
