import React from 'react';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Images from '../components/Images';
import fea1Img from '../assets/icons8-drone-100.png';
import fea2Img from '../assets/icons8-photographer-100.png';
import fea3Img from '../assets/icons8-fan-100.png'; // Placeholder for Charger Fan
import fea4Img from '../assets/icons8-charge-100.png'; // Placeholder for Weight Scale
import fea5Img from '../assets/icons8-tv-100.png'; // Placeholder for TV
import fea6Img from '../assets/icons8-ssd-100.png'; // Placeholder for Mobile Phone
import fea7Img from '../assets/icons8-mobile-100.png'; // Placeholder for Mobile Accessories
import fea8Img from '../assets/icons8-webcam-100.png'; // Placeholder for Portable SSD
import fea9Img from '../assets/icons8-earphones-100.png'; // Placeholder for Portable WiFi Camera
import fea10Img from '../assets/icons8-apple-watch-100.png'; // Placeholder for Trimmer
import fea11Img from '../assets/icons8-wi-fi-router-100.png'; // Placeholder for Smart Watch
import fea12Img from '../assets/icons8-earbud-headphones-100.png'; // Placeholder for Action Camera
import fea13Img from '../assets/icons8-portable-speaker-100.png'; // Placeholder for Earphone
import fea14Img from '../assets/icons8-playstation-store-100.png'; // Placeholder for Earbuds
import Heading from '../components/Heading';


const FeaturedCategories = [
  { name: 'Drone', icon: fea1Img },
  { name: 'Gimbal', icon: fea2Img },
  { name: 'Charger Fan', icon: fea3Img },
  { name: 'Weight Scale', icon: fea4Img },
  { name: 'TV', icon: fea5Img },
  { name: 'Mobile Phone', icon: fea6Img },
  { name: 'Mobile Accessories', icon: fea7Img },
  { name: 'Portable SSD', icon: fea8Img },
  { name: 'Portable WiFi Camera', icon: fea9Img },
  { name: 'Trimmer', icon: fea10Img },
  { name: 'Smart Watch', icon: fea11Img },
  { name: 'Action Camera', icon: fea12Img },
  { name: 'Earphone', icon: fea13Img },
  { name: 'Earbuds', icon: fea14Img },
];

const Categories = () => {
  return (
    <section className='font-poppins mt-7'>
      <div className="py-7 pb-10 flex flex-col items-center">
        <Heading text='Featured Category'/>
        <p className="mb-6 text-center">Get Your Desired Product from Featured Category!</p>
        <div className="w-full flex flex-wrap gap-4 items-center justify-center">
          {FeaturedCategories.map((category, index) => (
            <div 
              key={index}
              className="flex flex-col justify-center bg-white w-[200px] h-[150px] shadow-lg rounded-lg text-center"
            >
              <img src={category.icon} alt={category.name} className="text-4xl w-16 h-16 mx-auto" />
              <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
        <Flex>
          {/* Additional Flex content can go here */}
        </Flex>
      </div>
    </section>
  );
};

export default Categories;












// import React from 'react'
// import Container from '../components/Container'
// import Flex from '../components/Flex';
// import Button from '../components/Button';

// const Categories = () => {
//   return (
//     <section className='pt-10'>
//         <Container>
//             <Flex className='h-[40px] w-full gap-10 text-gray-700 justify-center items-center'>
//                 <Button className='!py-4 text-[18px]' text='All'/>
//                 <Button className='!py-4 text-[18px]' text='Laptop'/>
//                 <Button className='!py-4 text-[18px]' text='Mobile'/>
//                 <Button className='!py-4 text-[18px]' text='PC'/>
//             </Flex>
//         </Container>
//     </section>
//   )
// }

// export default Categories

