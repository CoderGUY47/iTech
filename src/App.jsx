import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route, 
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Error from './pages/Error';
import Contacts from './pages/Contacts';
import Carts from './pages/Carts';
import { CartProvider } from './context/CartContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Error/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contacts/>} />
      {/* <Route path="/blog" element={<Blog/>} /> */}
      <Route path="/cart" element={<Carts/>} />
    </>
  )
); 

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  )
}

export default App
