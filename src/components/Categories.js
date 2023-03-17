import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import '../styles/Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.categories);
  return (
    <div className="catStatus">
      <p>{status}</p>
      <button className="statBtn" type="button" onClick={() => dispatch(checkStatus())}>
        Check Status
      </button>
    </div>
  );
};
export default Categories;
