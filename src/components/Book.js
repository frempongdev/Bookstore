import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import progressImg from '../assets/progressBar.png';
import { removeBook, removeBookFromAPI } from '../redux/books/bookSlice';
import '../styles/Book.css';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookContainer">
      <div className="bookLeft">
        <div className="bookDetails">
          <span className="bookCategory">{category}</span>
          <span className="bookTitle">{title}</span>
          <span className="bookAuthor">{author}</span>
        </div>
        <div className="bookBtns">
          <button type="button" className="commentBtn">Comment</button>
          <div className="btnDivider" />
          <button
            className="removeBtn"
            type="button"
            onClick={() => {
              dispatch(removeBook(id));
              dispatch(removeBookFromAPI(id));
            }}
          >
            Remove
          </button>
          <div className="btnDivider" />
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>
      <div className="bookMid">
        <div className="progress">
          <img className="progressImg" src={progressImg} alt="" />
          <div className="progressInfo">
            <span className="progressNum">64%</span>
            <span className="completed">Completed</span>
          </div>
        </div>
      </div>
      <div className="bookRight">
        <div className="chapter">
          <span className="currChapter">CURRENT CHAPTER</span>
          <span className="currChapter">Chapter 2</span>
        </div>
        <button type="button" className="upChapBtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
