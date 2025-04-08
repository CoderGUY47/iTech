import React from 'react'
import Container from '../components/Container'
import BannerImage from '../assets/hero-ba.jpg'
import Images from '../components/Images'
import Button from '../components/Button'
const Banner = () => {
  return (
    <section className='h-[700px] w-full'>
        <Images className="h-[700px] w-full object-cover" src={BannerImage}/>
        <Container>
            <div className='bg-red-500 -z-1 -mt-[470px]'>
                <h2 className='text-white font-poppins font-black text-[60px] mb-0'>Welcome to iTech</h2>
                <p className='w-[700px] text-white font-poppins font-normal text-[20px] leading-[35px]'>
                    Your one-stop shop for the latest electronics accessories.
                    Explore Innovative Gadgets & Premium Tech Essentials. 
                    Empowering Your Digital Lifestyle with Expert-Curated Solutions.
                </p>
                <div className='mt-5'>
                  <Button className='w-[200px] py-4 rounded-md text-[20px] duration-500' text='Buy Now'/>
                </div>
            </div>
        </Container>
    </section>
  )
}
export default Banner