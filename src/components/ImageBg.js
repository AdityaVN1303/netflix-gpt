import React, { useEffect } from 'react'
import { API_OPTIONS, headerbgImg } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';


const ImageBg = ({id}) => {

  const dispatch = useDispatch();
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo);

  const getVideo = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
    const json = await data.json();
    const filteredData = json.results.filter((item)=> item.type === 'Trailer');
    const trailer = filteredData[0];
    dispatch(addTrailerVideo(trailer));

  }

  useEffect(() => {
    getVideo();
  }, [])
  

  return (
    <div className=''>
        <iframe className='w-full  lg:block  aspect-video -my-6 lg:-my-28' src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&controls=0&showinfo=0&start=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    </div>
  )
}

export default ImageBg