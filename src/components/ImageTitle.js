import React from 'react'
import { Link } from 'react-router-dom'

const ImageTitle = ({title , overview , id}) => {
  return (
    <div className="main w-full h-full lg:h-screen lg:mt-10 bg-gradient-to-r from-black pl-10 pt-28  lg:pt-72 absolute text-white">
   <div className="sub w-3/4 lg:w-1/4">
   <div className='text-base  lg:text-3xl lg:mb-3 font-semibold'>{title}</div>
    <div className='hidden lg:block mb-5'>{overview}</div>
    <Link to={`/browse/movie/${id}`}><button className='bg-white rounded-md hover:bg-opacity-80 mr-2 text-[10px] lg:text-base text-black p-[4px] lg:p-2'>Play Now</button></Link>
    <Link to={`/browse/movie/${id}`}><button className='bg-white rounded-md hover:bg-opacity-80 mr-2 text-[10px] lg:text-base text-black p-[4px] lg:p-2'>More Info</button></Link>
   </div>
    </div>
  )
}

export default ImageTitle