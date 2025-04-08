import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Paratext from '../components/Paratext'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className="py-20">
        <Container>
        <Heading className='flex justify-center pb-5 text-[#1e1e1e] font-bold' text='Get in Touch'/>
        <Flex className='gap-8 justify-center items-center'>
            <div className="w-1/2">
                <form className="pt-3 font-poppins text-[18px]">
              <div className=''>
                <label className="block pb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your name" 
                  className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div className=''>
                <label className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email" 
                  className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div className=''>
                <label className="block mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div className=''>
                <label className="block mb-1">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="w-full border border-gray-300 rounded p-2" 
                  rows="4">
                </textarea>
              </div>
              <Button className='w-full' text='Send a message'/>
            </form>
            </div>

        {/* Contact Information */}
            <div className="w-1/2">
                <Flex className='flex-col gap-8'>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-2xl">
                    <Heading className='!text-[22px] text-purple-600 font-bold' text='Contact Information'/>
                    <Flex className="gap-x-3">
                      <Paratext className='!font-semibold !text-base' text='Address:'/>
                      <Paratext className='!text-base' text='1204, City, Country'/>
                    </Flex>
                    <Flex className="gap-x-3">
                      <Paratext className='!font-semibold !text-base' text='Phone:'/>
                      <Paratext className='!text-base' text='+880-3456-7890'/>
                    </Flex>
                    <Flex className="gap-x-3">
                  <Paratext className='!font-semibold !text-base' text='Email:'/>
                  <Paratext className='!text-base' text='support@example.com'/>
                    </Flex>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-2xl">
                        <Heading className='!text-[22px] text-purple-600 font-bold' text='Business Hours'/>
                        <div>
                <Flex className="gap-x-3">
                  <Paratext className='!font-semibold !text-base' text='Available:'/>
                  <Paratext className='!text-base' text='Monday - Friday: 9am - 6pm'/>
                </Flex>
                <Flex className="gap-x-3">
                  <Paratext className='!font-semibold !text-base' text='In Weekand:'/>
                  <Paratext className='!text-base' text='Saturday: 10am - 4pm'/>
                </Flex>
                <Flex className="gap-x-3">
                  <Paratext className='!font-semibold !text-base' text='Day Off:'/>
                  <Paratext className='!text-base' text='Sunday: Closed'/>
                </Flex>
                        </div>
                    </div>
                </Flex>
            </div>
        </Flex>

        </Container>

    </section>
  )
}

export default Contact
