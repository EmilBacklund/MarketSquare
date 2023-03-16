import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../store/modules/products';

const SingleProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Hello I am single product view {id}</h1>
    </div>
  );
};

export default SingleProduct;
