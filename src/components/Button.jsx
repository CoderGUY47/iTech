import React from 'react'

const Button = ({ text, className, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-[200px] bg-[#2e2e2e] hover:bg-[#494949] duration-500 
      text-white font-semibold py-2 rounded-lg ${className}`}>
      {text}
    </button>
  )
}

export default Button;
