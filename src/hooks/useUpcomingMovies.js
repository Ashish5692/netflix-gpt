import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  //Fetch data  of  popular movies from TMDB API and updating and putting it inside the store
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    
    dispatch(addUpcomingMovies(json.results)); //pushing json results to store
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);

};

export default useUpcomingMovies;
