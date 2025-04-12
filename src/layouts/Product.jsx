import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Paratext from '../components/Paratext';
import Button from '../components/Button';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        setProducts(data);
        setFeaturedProducts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <section className='pt-[50px] pb-[100px]'>
        <Container>
          <div className='flex flex-col items-center py-5'>
            <Heading text='Products' />
            <div className="text-center py-8 text-xl">Loading products...</div>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className='pt-[50px] pb-[100px]'>
        <Container>
          <div className='flex flex-col items-center py-5'>
            <Heading text='Products' />
            <div className="text-center py-8 text-red-500 text-xl">Error: {error}</div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className='pt-[50px] pb-[100px]'>
      <Container>
        <div className='flex flex-col items-center py-5'>
          <Heading text='Products' />
          <Paratext text='You can order anything from here' />
        </div>
      </Container>

      <Flex className='flex-wrap gap-x-7 gap-y-7 justify-center pb-16'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </Flex>

      <div className="bg-[#ffcc00] font-poppins text-center py-5">
        <h2 className="text-[30px] font-bold">Limited Time Offer!</h2>
        <p className="text-[20px] font-medium pb-4">Get 20% off on selected items. Hurry, while stocks last!</p>
        <div className="flex font-poppins font-bold justify-center gap-x-2 mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="w-[100px] flex flex-col bg-white py-5 rounded-lg">
              <span className="text-[26px]">{value}</span>
              <span className="text-[18px] capitalize">{unit}</span>
            </div>
          ))}
        </div>
        <Button className='hover:bg-gray-700' text='Shop NOW' />
      </div>

      <div className="pt-5 pb-0">
        <h2 className="text-[34px] py-5 font-bold text-center">Featured Products</h2>
        <Flex className='flex-wrap gap-x-7 gap-y-7 justify-center pb-16'>
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={`$${product.price.toFixed(2)}`}
            />
          ))}
        </Flex>
      </div>
    </section>
  );
};

export default Product;
