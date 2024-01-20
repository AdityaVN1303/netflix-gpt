import React from 'react'
import { useSelector } from 'react-redux';
import ImageTitle from './ImageTitle';
import ImageBg from './ImageBg'

const MainContainer = () => {

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    if(!movies) return;

    const mainMovie = movies[0];

  return (
    <>
    <ImageTitle title={mainMovie?.title} overview={mainMovie?.overview}/>

    <ImageBg img={mainMovie.poster_path} id={mainMovie.id}/>
    </>
  )
}

export default MainContainer