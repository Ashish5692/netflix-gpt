import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  //Fetch data  of  popular movies from TMDB API and updating and putting it inside the store
  const dispatch = useDispatch();

  const popularMovies = useSelector((store)=> store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    
    dispatch(addPopularMovies(json.results)); //pushing json results to store
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

};

export default usePopularMovies;
