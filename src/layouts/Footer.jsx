import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <section>
    <footer className="bg-[#2e2e2e] text-white py-2">
      <div className="w-full mx-auto px-16 py-10 flex flex-wrap">
        {/* About Section */}
        <div className="w-4/12 p-7">
          <h3 className="text-2xl font-poppins font-black text-white mb-4">iTech</h3>
          <p className="w-[350px] text-base font-poppins font-normal text-white leading-6">
            Your premier destination for cutting-edge electronics and tech gadgets. 
            Committed to quality and innovation since 2023.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-2/12 p-7">
          <h4 className="text-[20px] font-poppins font-bold text-white mb-4">Links</h4>
          <ul>
            <li><a href="/about" className="text-[16px] font-poppins font-normal text-white">About Us</a></li>
            <li><a href="/products" className="text-[16px] font-poppins font-normal text-white">Products</a></li>
            <li><a href="/blog" className="text-[16px] font-poppins font-normal text-white">Blog</a></li>
            <li><a href="/contact" className="text-[16px] font-poppins font-normal text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-3/12 p-7">
          <h4 className="text-[20px] font-poppins font-bold text-white mb-4">Contact Us</h4>
          <ul>
            <li className="flex items-center gap-x-3">
              <IoIosMail className='text-[26px]'/><p className='text-base font-poppins font-normal text-white'>info@iTEch.com</p>
            </li>
            <li className="flex gap-x-5 items-center">
              <FaPhone/><p className='text-base font-poppins font-normal text-white'>+880 1234 567890</p>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="w-3/12 p-7">
          <h4 className="text-[20px] font-poppins font-bold text-white mb-4">Follow Us</h4>
          <div className="flex gap-x-4">
            <a href="#" className="hover:text-orange-500 duration-500"><FaFacebook className='text-[24px]' /></a>
            <a href="#" className="hover:text-orange-500 duration-500"><FaTwitter className='text-[24px]'/></a>
            <a href="#" className="hover:text-orange-500 duration-500"><FaInstagram className='text-[24px]' /></a>
            <a href="#" className="hover:text-orange-500 duration-500"><FaLinkedin className='text-[24px]' /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
        <div className="border-t border-gray-600 py-5 text-center"></div>
        <div className="pt-0 pb-8">
            <div className="w-full flex justify-between px-[85px]">
                <p className="text-base font-poppins font-normal text-white">| &copy; {new Date().getFullYear()} iTech 2025 | All rights reserved |</p>
                <p className="text-base font-poppins font-normal text-white">| Privacy Policy | Terms of services |</p>
            </div>
        </div>
    </footer>
    </section>
  );
};

export default Footer;