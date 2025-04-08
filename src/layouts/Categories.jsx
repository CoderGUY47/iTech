import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex';
import Button from '../components/Button';

const Categories = () => {
  return (
    <section className='pt-10'>
        <Container>
            <Flex className='h-[40px] w-full gap-10 text-gray-700 justify-center items-center'>
                <Button className='!py-4 text-[18px]' text='All'/>
                <Button className='!py-4 text-[18px]' text='Laptop'/>
                <Button className='!py-4 text-[18px]' text='Mobile'/>
                <Button className='!py-4 text-[18px]' text='PC'/>
            </Flex>
        </Container>
    </section>
  )
}

export default Categories