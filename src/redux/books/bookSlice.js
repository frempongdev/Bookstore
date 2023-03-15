import { createSlice } from '@reduxjs/toolkit';
import bookArray from '../../components/booksource';

const initialState = {
  books: bookArray,
  completed: false,

};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const updatedState = {
        ...state,
        books: state.books.filter((book) => book.item_id !== bookId),
      };
      return updatedState;
    }
    ,
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
