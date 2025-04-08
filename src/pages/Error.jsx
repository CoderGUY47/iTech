import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Error = () => {
  return (
    <>
    <Navbar/>
    <section className='py-20'>
      <Container>
        <Flex className='flex-col justify-center items-center'>
          <h1 className='text-[15rem] font-poppins font-bold text-[#2e2e2e]'>404</h1>
          <p className='text-[24px] font-poppins font-normal text-[#2e2e2e] pb-7'>The server can not find the requested page</p>
          <Link to='/'><Button className='!py-5 w-full px-[40px] text-[26px]' text='Go Home'/></Link>
        </Flex>
      </Container>
    </section>
    <Footer/>
    </>
  )
}

export default Error