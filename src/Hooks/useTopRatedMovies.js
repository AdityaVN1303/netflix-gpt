import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addTopRatedMovies} from '../utils/movieSlice'

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();

    const fetchData = async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
  
    }
  
    useEffect(() => {  
      fetchData();
    }, [])
}

export default useTopRatedMovies;