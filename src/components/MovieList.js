import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movieList , title}) => {
    // console.log(movieList[0])
  return (
    <div className="mx-5 my-5">
        <h1 className='text-3xl my-2 font-semibold'>{title}</h1>
        
    <div className="list-tag flex items-center">
        <div className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        {
           movieList && movieList.map((item)=>{
                return (
                    <MovieCard key={item.id} title={item.title} img={item.poster_path
                    }/>
                )
            })
        }
        </div>
    </div>
    </div>
  )
}

export default MovieList