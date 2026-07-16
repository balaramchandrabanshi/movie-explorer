import React from "react";

const NoMoviesFound = ({onBrowsePopular}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-7xl mb-4">🎬</div>

      <h2 className="text-3xl font-bold text-white mb-2">No Movies Found</h2>

      <p className="text-gray-400 text-center max-w-md mb-6">
        We couldn't find any movies matching your search. Try another movie
        title.
      </p>

      <button
        onClick={onBrowsePopular}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
      >
        Browse Popular Movies
      </button>
    </div>
  );
};

export default NoMoviesFound;
