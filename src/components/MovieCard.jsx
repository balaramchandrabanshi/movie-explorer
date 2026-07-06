import React from "react";
import { FaStar } from "react-icons/fa";

// const movie = {
//   id: 1,
//   title: "Inception",
//   poster: "InceptionMovie.webp",
//   rating: 8.8,
//   releaseYear: 2010,
// };

const MovieCard = ({movie}) => {
  return (
    <div className="w-60 p-3 m-1.5 bg-slate-800 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
      <img
        className="h-56 w-full object-cover rounded-lg"
        src="./images/inception.png"
        alt="cardImage"
      />
      <div className="pt-3 p-1 text-white">
        <p className="text-xl font-medium pb-3 line-clamp-2">{movie.title}</p>
        <div className="flex justify-between">
          <p className="flex justify-between items-center gap-1.5">
            <FaStar />
            {movie.rating}
          </p>
          <p className="pr-1">{movie.releaseYear}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
