import React from 'react'

const Heading = ({text,className}) => {
  return (
    <>
      <h2 className={`font-poppins font-bold text-[#252525] text-[36px] ${className}`}>{text}</h2>
    </>

  )
}

export default Heading