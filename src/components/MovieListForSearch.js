import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieListForSearch = ({movieList , title}) => {
    // console.log(movieList[0])
  return (
    <div className="mx-5 my-5 text-white">
    <div className="list-tag flex">
        <div className="flex flex-wrap justify-around">
        {movieList &&
        movieList.length === 0 ? <h1>Enter Valid Search</h1> :
            movieList.map((item)=>{
                return (
                    <>
                    { item?.poster_path &&
                    <Link key={item?.id} to={`/browse/movie/${item?.id}`}>
                    <MovieCard key={item.id} title={item.title} img={item.poster_path
                    }/>
                    </Link>
                    }
                    </>
                )
            })
        }
        </div>
    </div>
    </div>
  )
}

export default MovieListForSearch