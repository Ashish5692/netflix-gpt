import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  //Fetch data  of now playing movies from TMDB API and updating and putting it inside the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results)); //pushing json results to store
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return <div>useNowPlayingMovies</div>;
};

export default useNowPlayingMovies;
