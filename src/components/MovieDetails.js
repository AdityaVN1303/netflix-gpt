import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageBg from './ImageBg';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {addMovie , addCast} from '../utils/movieDetailSlice'
import {headerbgImg} from '../utils/constants'
import HeaderForDetailPage from './HeaderForDetailPage'

const MovieDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((store)=>store?.movieDetail?.movies)
  const {cast} = useSelector((store)=>store?.movieDetail?.cast)



  const findResult = async ()=>{
    const results = await fetch(`https://api.themoviedb.org/3/movie/${id}`, API_OPTIONS)
    const json = await results.json();
    dispatch(addMovie(json));
  }

  const findCast = async ()=>{
    const results = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, API_OPTIONS)
    const json = await results.json();
    dispatch(addCast(json));
  }

  useEffect(() => {
    findResult();
    findCast();
    }, [])
  


  return (
    <>
    <HeaderForDetailPage/>
    <div className="detail">
      <ImageBg id={id}/>
      <div className="writeup px-5 mt-10 h-full bg-black text-white">
        <h1 className='text-3xl font-semibold lg:text-4xl'>
          {movie?.title}
        </h1>
        <p>{movie?.overview}</p>
        <div className='flex my-2 justify-start space-x-2'>
          {
          movie?.genres?.map((item)=>{
            return (
              <p key={item?.id} className='p-1 bg-blue-700 rounded-md'>{item?.name}</p>
            )
          })
        }
        </div>
        <p>{movie?.runtime} minutes</p>
        <p>Released on - {movie?.release_date}</p>
        <h1 className='mt-10 mb-5 font-semibold text-xl lg:text-3xl lg:font-bold'>CAST</h1>
        <div className="casting flex justify-around flex-wrap my-5">
          {
            cast && (cast.slice(0 , 10)).map((actor)=>{
              return (    
              <div key={actor?.id} className="actor flex flex-col my-5 space-y-2">
                { actor?.profile_path &&
                  <div className='w-36'>
                  <img className='w-32 lg:w-40' src={headerbgImg + actor.profile_path} alt="actor_pic" />
                  <h1>{actor.name}</h1>
                  <h1>As : {actor?.character.split(' ')[0].slice(0, -1)}</h1>
                  </div>
                }
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieDetails