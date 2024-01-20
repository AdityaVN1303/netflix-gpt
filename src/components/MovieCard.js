import React from 'react'
import {headerbgImg} from '../utils/constants'

const MovieCard = ({title, img}) => {
  return (
        <div className="w-48 overflow-hidden inline-block mx-3">
          <img className='' src={headerbgImg + img} alt="card-img" />
        </div>
  )
}

export default MovieCard