import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],

};

const bookSlice = createSlice({
  name: 'book',
  initialState,
});

export default bookSlice.reducer;
