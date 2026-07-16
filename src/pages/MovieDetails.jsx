import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";
import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Loading from "../components/Loading";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        console.log(data);
        setMovie(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Backdrop */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-72 rounded-xl shadow-xl"
        />

        {/* Details */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{movie.title}</h1>

          <p className="text-gray-400 italic mt-2">{movie.tagline}</p>

          <div className="flex flex-wrap gap-6 mt-6 text-lg">
            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              {movie.vote_average?.toFixed(1)}
            </span>

            <span className="flex items-center gap-2">
              <SlCalender />
              {movie.release_date}
            </span>

            <span>⏱ {movie.runtime} min</span>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-blue-600 px-4 py-1 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8">Overview</h2>

          <p className="text-gray-300 leading-8 mt-3">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
