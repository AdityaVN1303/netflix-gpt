import React, { useRef } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearch } from '../utils/searchSlice';

const SearchBar = () => {

  const searchText = useRef(null);
  const dispatch = useDispatch();

  const findResult = async ()=>{
    const results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.current.value}&include_adult=false&language=en-US&page=1`, API_OPTIONS)
    const json = await results.json();
    dispatch(addSearch(json.results));
  }

  return (
    <div className="SearchBar space-x-2 flex">
        <input ref={searchText} type="text" className='p-3 border-2 border-black text-black rounded-md w-full' />
        <button onClick={findResult} className='bg-blue-700 p-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar