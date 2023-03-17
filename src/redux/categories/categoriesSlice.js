import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Horror', 'Fiction', 'Romance', 'History', 'Biography'],
  status: 'Under Contruction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under Contruction',

    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
