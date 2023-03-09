/* eslint-disable import/extensions */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './components/Books.js';
import Categories from './components/Categories.js';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
