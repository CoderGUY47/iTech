import React from 'react';
import Flex from '../components/Flex';
import Images from '../components/Images';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartList = ({ proNo, product }) => {
  const { addToCart } = useCart();

  // Handle quantity decrement
  const handleDecrement = () => {
    addToCart({
      ...product,
      quantity: -1,
      cartId: product.cartId || product.id
    });
  };

  return (
    <div className='flex items-center justify-center font-poppins border-[#bebebe] border-2 border-t-0'>
      <div className='w-[10%] flex h-[130px] items-center text-[18px] font-medium justify-center'>{proNo}</div>

      <div className='w-[35%] flex h-[130px] items-center justify-center border-l-2 border-[#bebebe]'>
        <Flex className='w-full justify-between p-5 items-center py-3 gap-x-4'> {/* Increased gap here */}
          <div>
            <div className="font-medium">{product.name}</div>
            <div className="text-[14px] text-gray-500">
              {product.title} {/* Display product title here */}
            </div>
          </div>
          <Images className='w-[80px] h-[80px] object-contain' src={product.image} />
        </Flex>
      </div>

      <div className='w-[20%] flex h-[130px] items-center justify-center border-l-2 border-[#bebebe] gap-x-2'>
        <div className="flex items-center justify-center gap-x-5 px-7 py-2 border-2 border-[#bebebe]">
          <button
            onClick={handleDecrement}
            className="text-[#4b4b4b] duration-300 hover:text-[#8b61ff]"
          >
            <FaMinus size={20} />
          </button>
          <span className="text-[18px] font-poppins font-medium">
            {Math.max(product.quantity, 0)}
          </span>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="text-[#4b4b4b] duration-300 hover:text-[#8b61ff]"
          >
            <FaPlus size={20} />
          </button>
        </div>
      </div>

      <div className='w-[13.5%] flex h-[130px] items-center justify-center border-l-2 border-[#bebebe]'>
        ${(product.price * Math.max(product.quantity, 0)).toFixed(2)}
      </div>

      <div className="w-[21.5%] flex h-[130px] items-center justify-center border-l-2 border-[#bebebe]">delte</div>
    </div>
  );
};

export default CartList;
