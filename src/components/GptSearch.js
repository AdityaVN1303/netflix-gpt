import React from 'react'
import SearchBar from './SearchBar'
import SearchBody from './SearchBody'
import {bgImg} from '../utils/constants'


const GptSearch = () => {
  return (
    <div>
      <img src={bgImg} className='h-screen w-full object-cover' alt=""/>
    <div className='search bg-black opacity-90  absolute text-white top-32 py-20  flex flex-col justify-around items-center w-full '>
    <SearchBar/>
    <SearchBody/>
    </div>
    </div>
  )
}

export default GptSearch