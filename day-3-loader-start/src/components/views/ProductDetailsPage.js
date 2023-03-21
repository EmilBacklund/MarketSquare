import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../../store/modules/productsSlice';

const ProductDetailsPage = () => {
  const dispatch = useDispatch(); // Help you to dispatch actions, Example: dispatch(fetchProduct(id))
  const { singleProduct } = useSelector((state) => state.products); // GETS YOU THE PRODUCTS FROM THE STORE
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      //  id exists before calling fetchProduct is necessary to prevent errors.
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {singleProduct && (
        <div>
          <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {singleProduct.title}
                </h2>
                <p className="mt-4 text-gray-500">
                  {singleProduct.description}
                </p>
                <button
                  type="button"
                  className="rounded-md w-full md:w-auto mt-4 bg-blue-700 py-2 px-6 text-sm font-semibold text-white hover:bg-blue-900"
                >
                  Add to cart
                </button>
                <ul className="mt-4">
                  <li>Price: {singleProduct.price} NOK</li>
                  <li>Rating: {singleProduct.rating}/ 5</li>
                  <li>Stock: {singleProduct.stock}</li>
                </ul>
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10  sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{}</dd>
                  </div>
                </dl>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                {singleProduct.images &&
                  singleProduct.images.length &&
                  singleProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={image}
                      className="rounded-lg bg-gray-100"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
