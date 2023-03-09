import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ title, author }) => (
  <div className="bookDetails">
    <span className="bookTitle">{title}</span>
    <span className="bookAuthor">{author}</span>
    <button className="removeBook" type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
