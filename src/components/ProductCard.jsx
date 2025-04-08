import React from 'react'
import Images from './Images';
import Flex from './Flex';
import { FaStar, FaStarHalf, FaHeart, FaSearch, FaExchangeAlt, FaEye } from "react-icons/fa";
import Button from './Button';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, image, title, price }) => {
  const { addToCart } = useCart();

  // Create an object representing this product
  const product = { id, image, title, price };

  return (
    <div className='h-[450px] w-[300px] p-4 bg-[#ffffff] rounded-lg shadow-2xl'>
      {/* Image container with hover overlay */}
      <div className="relative group h-[240px] w-[250px] p-2 overflow-hidden object-cover rounded-md">
        <Images className='w-full rounded-md' src={image} />
        {/* Hover overlay, hidden by default */}
        <div className="absolute inset-0 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-50 p-2 rounded-l-md space-y-2">
            <FaHeart className="text-white cursor-pointer" size={18} />
            <FaSearch className="text-white cursor-pointer" size={18} />
            <FaExchangeAlt className="text-white cursor-pointer" size={18} />
            <FaEye className="text-white cursor-pointer" size={18} />
          </div>
        </div>
      </div>
      <Flex className='gap-x-1 mt-4'>
        <FaStar className='text-[#ff7411]'/>
        <FaStar className='text-[#ff7411]'/>
        <FaStar className='text-[#ff7411]'/>
        <FaStar className='text-[#ff7411]'/>
        <FaStar className='text-[#ff7411]'/>
        <FaStarHalf className='text-[#ff7411]'/>
      </Flex>
      <div className='mt-4 leading-9'>
        <h2 className='font-poppins font-semibold text-[#252525] text-[20px]'>{title}</h2>
        <p className='font-poppins font-medium text-[#252525] text-[18px]'>{price}</p>
        <Button 
          className='!w-full text-[20px]' 
          text='Add to Cart'
          onClick={() => addToCart(product)}
        />
      </div>
    </div>
  )
}

export default ProductCard
