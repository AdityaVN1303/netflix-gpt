import React from 'react'
import {headerbgImg} from '../utils/constants'

const MovieCard = ({title, img}) => {
  return (
       <>
       {img &&
         <div className="w-28  lg:w-36 my-5 overflow-hidden inline-block mx-3">
          {
             <img className='' src={headerbgImg + img} alt="card-img" />
          }
        </div>}
       </>
  )
}

export default MovieCard