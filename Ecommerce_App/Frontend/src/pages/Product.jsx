import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 pt-15  transition-opacity ease-in duration-500 opacity-100'>
      {/*---- Product Data ----- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full '>
            {productData.image.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
            ))
            }
          </div>
          <div className=' w-full sm:w-[86%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/*------ Product Info------- */}
        <div className='flex-1 text-left'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-3 text-2xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-3 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>Select size</p>
            <div className='flex gap-3'>
              {productData.sizes.map((item, index) => (
                <button onClick = {() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id,size)}  className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 '/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% origninal product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/*-------Description and review section---------*/}

    <div className='mt-5'>
      <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Description</b>
        <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>An e-commerce website is an online platform that provides wide range of varieties of clothes Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat non unde fugiat, delectus, voluptas consequuntur exercitationem quibusdam ex aut asperiores laborum illo animi quis aspernatur sit soluta modi eum. Libero</p>
        <p>E-commerce websites typically display products or services along with detailed product descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero sed cum ullam autem sunt architecto distinctio voluptatem, fuga voluptatibus officiis </p>
      </div>
    </div>

    {/* Display related products */}

    <RelatedProducts
    category={productData.category} 
    subCategory={productData.subCategory}/>
    </div>

  ) : <div className='opacity-0'></div>
}

export default Product;