import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../store/modules/products';
import { Image } from 'antd';

const SingleProduct = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div className='grid place-items-center h-screen p-5'>
      <Image
        preview={{ visible: false }}
        width={200}
        src={singleProduct.images[0]}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
          <Image src={singleProduct.images[0]} />
          <Image src={singleProduct.images[1]} />
          <Image src={singleProduct.images[2]} />
          <Image src={singleProduct.images[3]} />
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default SingleProduct;
