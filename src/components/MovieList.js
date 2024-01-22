import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({movieList , title}) => {
    // console.log(movieList[0])
  return (
    <div className="mx-5 my-5">
        <h1 className=' lg:text-3xl  font-semibold'>{title}</h1>
        
    <div className="list-tag flex items-center">
        <div className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {
           movieList && movieList.map((item)=>{
                return (
                    <Link to={`/browse/movie/${item?.id}`} key={item.id}><MovieCard title={item.title} img={item.poster_path
                    }/></Link>
                )
            })
        }
        </div>
    </div>
    </div>
  )
}

export default MovieList