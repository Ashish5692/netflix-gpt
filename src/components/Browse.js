import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import  usePopularMovies from "../hooks/usePopularMovies"

const Browse = () => {
  useNowPlayingMovies(); //calling the custom hook
  usePopularMovies(); //fetching popular movies and updating the store

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - VideoBakcground
          - VideoTitle
        SecondaryContainer
          - Movie List * n
            - cards *n
      */}
    </div>
  );
};

export default Browse;
