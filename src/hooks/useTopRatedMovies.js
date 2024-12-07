import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //Fetch data  of  popular movies from TMDB API and updating and putting it inside the store
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    
    dispatch(addTopRatedMovies(json.results)); //pushing json results to store
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

};

export default useTopRatedMovies;
