import React from 'react'
import Container from '../components/Container'

const Abouts = () => {
  return (
    <section className='bg-slate-100 py-10'>
      <Container>
        <h1 className="py-5 text-4xl font-poppins text-center font-bold text-[#3e3e3e]">About iTech Solutions</h1>
        
        <div>
          <div className='py-3'>
            <h2 className="text-[28px] font-semibold font-poppins text-gray-800 mb-3">Who We Are</h2>
            <p className="text-gray-600 font-poppins leading-relaxed">
              iTech Solutions is a leading technology partner specializing in innovative digital solutions. 
              With over a decade of experience, we empower businesses through cutting-edge software development, 
              cloud solutions, and strategic IT consulting. Lorem ipsum dolor, sit amet consectetur adipisicing 
              elit. Doloremque sapiente culpa aspernatur. Inventore, voluptate officia ab architecto 
              repellat illo obcaecati dolor neque nobis sunt quasi numquam mollitia sed. Explicabo, neque.
            </p>
          </div>
    
          <div className='py-3 font-poppins'>
            <h2 className="text-[28px] font-semibold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To transform businesses through technology innovation, providing scalable solutions that drive 
              growth, efficiency, and competitive advantage in the digital age. Lorem ipsum dolor sit amet 
              consectetur, adipisicing elit. Incidunt quis beatae, officia reprehenderit debitis recusandae. 
              Temporibus voluptas ipsa praesentium eveniet, autem soluta, quo, deleniti nobis excepturi suscipit 
              reprehenderit maiores sequi.
            </p>
          </div>
    
          <div className='py-3 font-poppins'>
            <h2 className="text-[28px] font-semibold font-poppins text-gray-800 mb-3">Our Values</h2>
            <div className="flex flex-row gap-4">
              <div className="p-4 bg-blue-50 shadow-2xl rounded-lg">
                <h3 className="font-semibold font-poppins text-[18px] text-purple-600 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="p-4 bg-blue-50 shadow-2xl rounded-lg">
                <h3 className="text-[18px] font-semibold font-poppins text-purple-600 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We are committed to delivering the highest quality in everything we do.
                </p>
              </div>
              <div className="p-4 bg-blue-50 shadow-2xl rounded-lg">
                <h3 className="text-[18px] font-semibold font-poppins text-purple-600 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We build relationships based on trust, transparency, and ethical business practices.
                </p>
              </div>
            </div>
          </div>
    
          <div className='py-5 font-poppins'>
          <h2 className="text-[28px] font-semibold font-poppins text-gray-800 mb-3">What We Do</h2>
            <ul className="list-disc list-inside py-0 text-gray-600">
              <li>Custom Software Development</li>
              <li>Cloud Computing Solutions</li>
              <li>Cybersecurity Services</li>
              <li>AI & Machine Learning Implementation</li>
              <li>Enterprise IT Infrastructure</li>
            </ul>
          </div>
    
          <div className='font-poppins'>
          <h2 className="text-[28px] font-semibold font-poppins text-gray-800 mb-3">Why Choose Us</h2>
            <div className="flex flex-row gap-x-3">
              <div className="w-[50%] py-2 px-2 bg-blue-50 shadow-2xl rounded-lg">
                <h3 className="font-semibold font-poppins text-purple-600 text-[18px] py-2">Expert Team</h3>
                <p className="text-gray-600 text-[17px]">
                  150+ certified professionals including software architects, engineers, and security experts
                </p>
              </div>
              <div className="w-[6/12] py-2 px-2 bg-blue-50 shadow-2xl rounded-lg">
                <h3 className="font-semibold font-poppins text-purple-600 text-[18px] py-2">Global Reach</h3>
                <p className="text-gray-600 text-[17px]">
                  Serving clients in 15+ countries across healthcare, finance, and retail sectors
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Abouts
