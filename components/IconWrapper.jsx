import React from 'react'

const IconWrapper = ({ children }) => {
  return (
    <span className='w-10 h-10 flex items-center ml-3 rounded-full justify-center bg-gray-200' >
        {children}
    </span>
  )
}

export default IconWrapper