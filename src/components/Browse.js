import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();



  return (
    <>
    <Header/>
    <div className="browse bg-black text-white">
      <MainContainer/>
      <SecondaryContainer/>
    </div>
    </>
  )
}

export default Browse