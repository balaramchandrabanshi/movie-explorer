import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getPopularMovies, searchMovies } from "../services/tmdb.js";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import NoMoviesFound from "./NoMoviesFound.jsx";
import Loading from "./Loading.jsx";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPopularMovies = () => {
    setLoading(true);

    getPopularMovies()
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const handleSearch = (query) => {
    setLoading(true);

    searchMovies(query)
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <h1 className="text-blue-600 font-bold text-4xl text-center p-4">
        Popular Movies
      </h1>
      <SearchBar onSearch={handleSearch}></SearchBar>
      {movies.length === 0 ? (
        <NoMoviesFound onBrowsePopular={loadPopularMovies}></NoMoviesFound>
      ) : (
        <div className="popular-movie-section flex flex-wrap justify-center gap-6 p-6">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard movie={movie}></MovieCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
