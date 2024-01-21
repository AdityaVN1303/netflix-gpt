import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector((store)=> store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=> store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store)=> store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store)=> store?.movies?.upcomingMovies);

  return (
    <div className='container -my-12 lg:-my-36 relative z-40 '>
    <MovieList title={"Now Playing"} movieList = {nowPlayingMovies}/>
    <MovieList title={"Popular Movies"} movieList = {popularMovies}/>
    <MovieList title={"Top Rated Movies"} movieList = {topRatedMovies}/>
    <MovieList title={"Upcoming Movies"} movieList = {upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer