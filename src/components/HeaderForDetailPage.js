import React from 'react'
import { logo } from '../utils/constants';
import { Link } from 'react-router-dom';

const HeaderForDetailPage = () => {
  return (
   <Link to="/">
    <div className='header flex justify-between text-white z-30 absolute top-0 px-6 py-1 bg-gradient-to-b from-black w-full'>
    <img src={logo} className=' w-20 h-10 lg:h-auto lg:w-52' alt="logo" />
</div>
   </Link>
  )
}

export default HeaderForDetailPage