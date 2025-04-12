import React from 'react'
import Images from './Images';
import Flex from './Flex';
import { FaStar, FaStarHalf, FaHeart, FaSearch, FaExchangeAlt, FaEye } from "react-icons/fa";
import Button from './Button';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, image, title, price }) => {
  const { addToCart } = useCart();

  const product = { id, image, title, price };

  return (
    <div className='flex flex-col w-full max-w-[350px] p-4 bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300'>
      {/* Image container with aspect ratio */}
      <div className="relative group h-[200px] w-full overflow-hidden rounded-md">
        <Images 
          className='w-full h-full object-contain rounded-md'
          src={image}
          alt={title}
        />
        
        {/* Hover actions */}
        <div className="absolute inset-0 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
          <div className="p-2 rounded-l-md space-y-3 mr-2">
            <FaHeart className="text-white cursor-pointer hover:text-[#9eff2f] duration-100" size={20} />
            <FaSearch className="text-white cursor-pointer hover:text-[#9eff2f] duration-100" size={20} />
            <FaExchangeAlt className="text-white cursor-pointer hover:text-[#9eff2f] duration-100" size={20} />
            <FaEye className="text-white cursor-pointer hover:text-[#9eff2f] duration-100" size={20} />
          </div>
        </div>
      </div>

      {/* Content area */}
      <Flex className='flex-col gap-y-4 flex-1 mt-4'>
        <div>
          <Flex className='gap-x-1'>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className='text-[#ff7411] text-sm'/>
            ))}
            <FaStarHalf className='text-[#ff7411] text-sm'/>
          </Flex>
          
          <h2 className='font-poppins font-medium text-gray-700 text-[16px] pt-5'>
            {title}
          </h2>
        </div>

        <div className='flex flex-col gap-y-4 mt-auto font-poppins'>
          <p className='font-poppins font-bold text-gray-700 text-[17px]'>
            {typeof price === 'number' ? `$${price.toFixed(2)}` : price}
          </p>
          <Button 
            className='w-full text-[18px] py-2 hover:bg-gray-800 transition-colors'
            text='Add to Cart'
            onClick={() => addToCart(product)}
          />
        </div>
      </Flex>
    </div>
  )
}

export default ProductCard
