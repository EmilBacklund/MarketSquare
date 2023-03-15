import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/modules/listings';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.listings);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <h1 className='text-5xl text-center py-10'>Products</h1>
      <div className='max-w-7xl mx-auto w-11/12 grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {products.map((product) => (
          <Link key={product.id} to={`/${product.id}`}>
            <div>
              <div className='text-center py-8 bg-red-50 rounded-t-lg'>
                <span className='text-2xl font-semibold'>{product.title}</span>
              </div>
              <div className='aspect-w-16 aspect-h-9'>
                <img className='object-contain' src={product.thumbnail} alt={product.title} />
              </div>
              <div className='bg-red-50 p-4 flex gap-6 justify-between items-center'>
                <p className='text-center'>{product.description}</p>
                <div className='flex flex-col items-center'>
                  <span className='text-xl font-medium'>{product.price}</span>{' '}
                  <span className='text-sm'>NOK</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
