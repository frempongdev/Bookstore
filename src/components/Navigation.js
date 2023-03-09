import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => (
  <nav>
    <h1>BOOKSTORE APP</h1>
    <ul className="navs">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/Categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navigation;
