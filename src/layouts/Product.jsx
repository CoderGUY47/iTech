import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Paratext from '../components/Paratext';
import pro1 from '../assets/acer-aspire-3-a315-59-56vc-intel-core-i5.webp';
import pro2 from '../assets/acer-aspire-lite-al15-41-amd-ryzen-3-5300u-8gb.webp';
import pro3 from '../assets/acer-aspire-lite-al15-52-12th-gen-intel-core-i3.webp';
import pro4 from '../assets/apple-macbook-pro-late-2023-apple-m3-pro.webp';
import pro5 from '../assets/hikvision-ezviz-h6c-pro-4mm-20mp-wi-fi-dome.webp';
import pro6 from '../assets/hp-15-fd1110tu-series-1-intel-core-3-100u-8gb-ram.webp';
import pro7 from '../assets/hp-15s-fq5059tu-intel-core-i3-1215u-8gb-ram-512gb.webp';
import pro8 from '../assets/hp-m22f-215-inch-fhd-ips-monitor.webp';
import pro9 from '../assets/hp-victus-gaming-15-fa1251tx-intel-core-i7-13700h.webp';
import pro10 from '../assets/lenovo-ideapad-1-15amn7-amd-ryzen-3-7320u-8gb-ram.webp';
import pro11 from '../assets/logitech-f310.webp';
import pro12 from '../assets/microsoft-surface-pro-10-for-business-wi-fi.webp';
import pro13 from '../assets/moza-air-2s-professional-kit-camera-gimbal.webp';
import pro14 from '../assets/tp-link-archer-c54-ethernet-dual-band-ac1200-mbps.webp';
import pro15 from '../assets/transcend-300s-64gb-microsdxcsdhc-uhs-i-u1-v30.webp';
import pro16 from '../assets/ugreen-cm748-35058-usb-bluetooth-54-black.webp';
import pro17 from '../assets/vention-hdmi-male-to-male-black-10-meter-hdmi.webp';
import pro18 from '../assets/wiwu-pilot-gray-156-inch-laptop-traveling.webp';

import Images from '../components/Images';
import Button from '../components/Button';

// Product data with unique IDs
const allProducts = [
  { id: 1, image: pro1, title: 'Acer Aspire 3', price: 45.52 },
  { id: 2, image: pro2, title: 'Acer Aspire Lite', price: 10.52 },
  { id: 3, image: pro3, title: 'Acer Core i3', price: 9.59 },
  { id: 4, image: pro4, title: 'Apple MacBook Pro', price: 5.52 },
  { id: 5, image: pro5, title: 'Hikvision EZVIZ', price: 15.52 },
  { id: 6, image: pro6, title: 'HP 15 Series', price: 4.52 },
  { id: 7, image: pro7, title: 'HP 15s Core i3', price: 9.59 },
  { id: 8, image: pro8, title: 'HP Monitor', price: 5.52 },
  { id: 9, image: pro9, title: 'HP Victus Gaming', price: 15.52 },
  { id: 10, image: pro10, title: 'Lenovo Ideapad', price: 75.52 },
  { id: 11, image: pro11, title: 'Logitech F310', price: 5.57 },
  { id: 12, image: pro12, title: 'Microsoft Surface', price: 75.22 },
  { id: 13, image: pro13, title: 'Moza Air Camera', price: 45.99 },
  { id: 14, image: pro14, title: 'TP-Link Archer', price: 25.00 },
  { id: 15, image: pro15, title: 'Transcend MicroSD', price: 85.00 },
  { id: 16, image: pro16, title: 'UGreen Bluetooth', price: 95.00 },
  { id: 17, image: pro17, title: 'Vention HDMI', price: 35.00 },
  { id: 18, image: pro18, title: 'WIWU Laptop Bag', price: 25.00 },
  { id: 19, image: pro1, title: 'Acer Aspire 3 Pro', price: 105.20 },
  { id: 20, image: pro2, title: 'Acer Aspire Lite Pro', price: 125.50 }
];

// Featured products subset
const featuredProducts = [
  { id: 1, image: pro1, title: 'Acer Aspire 3', price: 45.52 },
  { id: 2, image: pro2, title: 'Acer Aspire Lite', price: 30.52 },
  { id: 3, image: pro3, title: 'Acer Core i3', price: 10.52 },
  { id: 4, image: pro4, title: 'Apple MacBook Pro', price: 9.59 },
  { id: 5, image: pro5, title: 'Hikvision EZVIZ', price: 5.52 },
  { id: 16, image: pro16, title: 'UGreen Bluetooth', price: 95.00 },
  { id: 17, image: pro17, title: 'Vention HDMI', price: 35.00 },
  { id: 18, image: pro18, title: 'WIWU Laptop Bag', price: 25.00 },
  { id: 19, image: pro1, title: 'Acer Aspire 3 Pro', price: 105.20 },
  { id: 20, image: pro2, title: 'Acer Aspire Lite Pro', price: 125.50 }
];

const Product = () => {

  // State to hold the time left
  let [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  useEffect(() => {
    // Set the target date to 24 hours from now
    let targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 24); // 24-hour countdown
    // Start the timer
    let timer = setInterval(() => {
      // Get the current time
      let now = new Date().getTime();
      // Calculate the distance between now and the target date
      let distance = targetDate - now;
      // If the countdown is finished, clear the timer
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      // Calculate hours, minutes, and seconds left
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Update the state with the new time left
      setTimeLeft({
        hours: hours.toString().padStart(2, '0'), // Format to 2 digits
        minutes: minutes.toString().padStart(2, '0'), // Format to 2 digits
        seconds: seconds.toString().padStart(2, '0') // Format to 2 digits
      });
    }, 1000); // Update every second
    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className='pt-[50px] pb-[100px]'>
      <Container>
        <div className='flex flex-col items-center py-5'>
          <Heading text='Products' />
          <Paratext text='You can order anything from here' />
        </div>
      </Container>

      <Flex className='flex-wrap gap-x-7 gap-y-7 justify-center pb-16'>
        {allProducts.map(product => (
          <ProductCard 
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </Flex>

      {/* Offer Section Added Here */}
      <div className="bg-[#ffcc00] font-poppins text-center py-5">
        <h2 className="text-[30px] font-bold font-poppins">Limited Time Offer!</h2>
        <p className="text-[20px] font-medium pb-4">Get 20% off on selected items. Hurry, while stocks last!</p>
        <div className="flex font-poppins font-bold justify-center gap-x-2 mb-4">
          <div className="w-[100px] flex flex-col bg-white py-5 rounded-lg">
            <span className="text-[26px]">{timeLeft.hours}</span>
            <span className="text-[18px]">Hours</span>
          </div>
          <div className="w-[100px] flex flex-col bg-white py-5 rounded-lg">
            <span className="text-[26px]">{timeLeft.minutes}</span>
            <span className="text-[18px]">Minutes</span>
          </div>
          <div className="w-[100px] flex flex-col bg-white py-5 rounded-lg">
            <span className="text-[26px]">{timeLeft.seconds}</span>
            <span className="text-[18px]">Seconds</span>
          </div>
        </div>
        <Button className='hover:bg-gray-700' text='Shop NOW' />
      </div>

      {/* Featured Products Section */}
      <div className="pt-5 pb-0">
        <h2 className="text-[34px] py-5 font-bold font-poppins text-center">Featured Products</h2>
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
