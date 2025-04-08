import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import List from '../components/List';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart(); // Now properly provided by CartContext

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-[#2e2e2e]">
      <Container>
        <Flex className='items-center'>
          <div className="w-2/12">
            <h1 className='font-poppins text-2xl text-white font-black'>iTECH</h1>
          </div>
          <div className="w-8/12">
            <ul className='flex gap-x-14 justify-center'>
              <Link to='/'><List liText='Home' /></Link>
              <Link to='/products'><List liText='Products' /></Link>
              <Link to='/about'><List liText='About Us' /></Link>
              <Link to='/contact'><List liText='Contact' /></Link>
              <Link to='/blog'><List liText='Blog' /></Link>
              <Link to='/cart'><List liText='Carts' /></Link>
            </ul>
          </div>
          <div className="w-2/12 flex justify-end">
            <div className="relative">
              <FaShoppingCart className="text-white text-[20px]" />
              <span className={`absolute -top-3 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center
                ${cartCount === 0 ? 'opacity-100' : 'animate-bounce'}`}>
                {cartCount}
              </span>
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar;
