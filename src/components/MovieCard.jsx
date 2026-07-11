import React from "react";
import { FaStar } from "react-icons/fa";


const MovieCard = ({ movie }) => {
  return (
    <div className="w-64 p-3 m-1.5 bg-slate-800 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
      <img
        className="h-60 w-full object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="cardImage"
      />
      <div className="pt-3 p-1 text-white flex flex-col flex-1">
        <p className="text-xl font-semibold line-clamp-2 pb-3">
          {movie.original_title}
        </p>
        <p className="mt-1 text-sm text-gray-300 line-clamp-3">{movie.overview}</p>
      </div>

      <div className="pt-4 pb-1 mt-auto flex justify-between items-center text-yellow-400 text-sm">
        <span className="flex justify-center gap-1.5 items-center">
          <FaStar />
          {movie.vote_average?.toFixed(1)}
        </span>
        <span className="pr-1">
          {movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : "N/A"}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
