import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux';

const Browse = () => {

  const search = useSelector((state) => state?.gpt?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
    <Header/>
    <div className="browse bg-black text-white">
      {
        search ? <GptSearch/> : (
          <>
          <MainContainer/>
      <SecondaryContainer/>
          </>
        )
      }
    </div>
    </>
  )
}

export default Browse