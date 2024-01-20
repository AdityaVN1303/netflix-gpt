import React from 'react'

const ImageTitle = ({title , overview}) => {
  return (
    <div className="main w-full h-full lg:h-screen lg:mt-10 bg-gradient-to-r from-black pl-10 pt-28  lg:pt-72 absolute text-white">
   <div className="sub w-3/4 lg:w-1/4">
   <div className='text-xl  lg:text-3xl mb-3 font-semibold'>{title}</div>
    <div className='hidden lg:block mb-5'>{overview}</div>
    <button className='bg-white rounded-md hover:bg-opacity-80 mr-2 text-sm lg:text-base text-black p-1 lg:p-2 '>Play Now</button>
    <button className='bg-white rounded-md hover:bg-opacity-80 mr-2 text-sm lg:text-base text-black p-1 lg:p-2 '>More Info</button>
   </div>
    </div>
  )
}

export default ImageTitle