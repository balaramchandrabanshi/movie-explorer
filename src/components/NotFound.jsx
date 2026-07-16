import React from "react";
import { FaHome } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <FaFilm className="text-7xl text-blue-500" />
        </div>

        <h1 className="text-8xl font-bold text-white">404</h1>

        <h2 className="text-3xl font-semibold text-white mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
