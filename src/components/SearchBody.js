import React from 'react'
import MovieListForSearch from './MovieListForSearch'
import { useSelector } from 'react-redux'


const SearchBody = () => {

  const list = useSelector((store)=> store?.search);

  return (
    <div className="body mt-10">
      <MovieListForSearch title={"Search Results"} movieList={list?.movies}/>
    </div>
  )
}

export default SearchBody