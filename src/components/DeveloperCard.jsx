import React from 'react'
import Images from './Images';
import Flex from './Flex';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const DeveloperCard = ({ name, role, bio, image, social }) => {
  return (
    <div className='w-[300px] min-h-[400px] p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100'>
      <div className="relative h-[100px] w-[100px] mx-auto overflow-hidden rounded-full">
        <Images 
          className='w-full h-full object-cover'
          src={image}
          alt={name}
        />
      </div>

      <Flex className='flex-col gap-y-4 mt-6 text-center'>
        <h3 className='text-2xl font-bold text-gray-800'>{name}</h3>
        <p className='text-primary font-medium'>{role}</p>
        <p className='text-gray-600 text-base line-clamp-3'>{bio}</p>
        
        <Flex className='justify-center gap-x-4 mt-4'>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-gray-600 hover:text-[#333] transition-colors' size={20} />
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-gray-600 hover:text-[#0077b5] transition-colors' size={20} />
          </a>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className='text-gray-600 hover:text-[#1da1f2] transition-colors' size={20} />
          </a>
        </Flex>
      </Flex>
    </div>
  )
}

export default DeveloperCard;
