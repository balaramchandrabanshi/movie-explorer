import React from "react";
import moviesData from "../data/movies";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  console.log(moviesData);
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </div>
  );
};

export default MoviesList;
