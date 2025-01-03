import React from "react";
import MovieCard from "./MovieCard";
import '../index.css';

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="px-6 mt-10">
      <h1 className="text-lg md:text-3xl py-2 text-white mb-3 ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
