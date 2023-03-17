import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import { CgProfile } from 'react-icons/cg';

const Navigation = () => (
  <nav>
    <div className="navLeft">
      <h1>BOOKSTORE APP</h1>
      <ul className="navs">
        <li><Link className="navLink" to="/">BOOK</Link></li>
        <li><Link className="navLink" to="/Categories">CATEGORIES</Link></li>
      </ul>
    </div>
    <CgProfile className="profile" />
  </nav>
);

export default Navigation;
