import React from 'react';
import Flex from '../components/Flex';
import Images from '../components/Images';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartList = ({ proNo, product }) => {
  const { addToCart } = useCart();
    
  // Extract the file name from the product image source
  const getImageFileName = (src) => {
    if (typeof src === 'string') {
      const fileName = src.split('/').pop();
      const lastDotIndex = fileName.lastIndexOf('.');
      return lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;
    }
    return '';
  };

  // Handle quantity decrement
  const handleDecrement = () => {
    addToCart({ 
      ...product, 
      quantity: -1,
      cartId: product.cartId || product.id
    });
  };

  return (
    <div className='flex items-center justify-center border-[#bebebe] border-2 border-t-0'>
      <div className='w-2/12 flex h-[130px] items-center justify-center'>{proNo}</div>
      
      <div className='w-4/12 flex h-[130px] items-center justify-center border-l-2 border-[#bebebe]'>
        <Flex className='gap-x-4 items-center justify-center py-3'>
          <div>
            <div className="font-medium">{product.name}</div>
            <div className="text-sm text-gray-500">
              {getImageFileName(product.image)}
            </div>
          </div>
          <Images className='w-[150px] h-[100px]' src={product.image} />
        </Flex>
      </div>

      <div className='w-4/12 flex h-[130px] items-center justify-center border-l-2 border-[#bebebe] gap-x-2'>
        <button
          onClick={handleDecrement}
          className="text-red-500 hover:text-red-700"
        >
          <FaMinus size={20} />
        </button>
        <span className="text-lg font-medium">
            {Math.max(product.quantity, 0)}
          </span>
        <button
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="text-green-500 hover:text-green-700"
        >
          <FaPlus size={20} />
        </button>
      </div>

      <div className='w-2/12 flex h-[130px] items-center justify-center border-l-2 border-[#bebebe]'>
        ${(product.price * Math.max(product.quantity, 0)).toFixed(2)}
      </div>
    </div>
  );
};

export default CartList;
