import React, { useState } from "react";
import MovieCard from "./MovieCard";
const accessToken = import.meta.env.VITE_TMDB_API_TOKEN;

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  function getPopularMovies() {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        console.log(json.results);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1 className="text-blue-600 font-bold text-4xl text-center p-4" >Popular Movies</h1>
      <div className="popular-movie-section flex flex-wrap justify-center gap-6 p-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </div>
      <div className="flex justify-center mb-10">

      <button className="bg-blue-700 text-white text-xl rounded-xl p-2 hover:bg-blue-900" onClick={getPopularMovies}>Fetch Movies</button>
      </div>
    </div>
  );
};

export default PopularMovies;
