import React from 'react'
import Navbar from '../layouts/Navbar';
import Banner from '../layouts/Banner';
import Categories from '../layouts/Categories';
import Product from '../layouts/Product';
import Footer from '../layouts/Footer';
import Contact from '../layouts/Contact';


const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Categories/>
        <Product/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home