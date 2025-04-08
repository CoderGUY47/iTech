import React from 'react'
import Navbar from '../layouts/Navbar';
import Banner from '../layouts/Banner';
import Categories from '../layouts/Categories';
import Product from '../layouts/Product';
import Abouts from '../layouts/Abouts';
import Footer from '../layouts/Footer';
import Contact from '../layouts/Contact';


const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Categories/>
        <Product/>
        <Abouts/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home