import React from 'react'

const Paratext = ({text,className}) => {
  return (
    <p className={`font-poppins font-normal text-[#252525] text-[18px] ${className}`}>{text}</p>
  )
}

export default Paratext