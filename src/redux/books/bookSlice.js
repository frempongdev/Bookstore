import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Z4E41JcNjDjqcHOp3ggg/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(url);
  const promiseResponse = await response.json();
  const objectReturn = Object.keys(promiseResponse).map((key) => ({
    item_id: key,
    ...promiseResponse[key][0],
  }));

  return objectReturn;
});

export const addBookToAPI = createAsyncThunk('books/addBookToAPI', async (newbook) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newbook),
  });
  return response.data;
});

export const removeBookFromAPI = createAsyncThunk('books/removeBookFromAPI', async (bookId) => {
  await fetch(`${url}/${bookId}`, {
    method: 'DELETE',
  });
  return bookId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
      status: 'succeeded',
    }),

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, status: 'loading' }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({ ...state, status: 'succeeded', books: action.payload }))
      .addCase(fetchBooks.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }))
      .addCase(addBookToAPI.fulfilled, (state) => ({ ...state }))
      .addCase(removeBookFromAPI.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      }));
  },

});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
