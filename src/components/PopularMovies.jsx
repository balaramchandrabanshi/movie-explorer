import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getPopularMovies } from "../services/tmdb.js";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPopularMovies()
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-blue-600 font-bold text-4xl text-center p-4">
        Popular Movies
      </h1>
      <div className="popular-movie-section flex flex-wrap justify-center gap-6 p-6">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} >
            <MovieCard movie={movie}></MovieCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
