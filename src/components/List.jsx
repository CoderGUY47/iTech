import React from 'react'

const List = ({liText,className}) => {
  return (
    <li className={`font-poppins text-base list-none font-normal text-white hover:text-purple-400 cursor-pointer duration-500 ${className}`}>{liText}</li>
  )
}

export default List