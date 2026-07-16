import React from "react";
import { IoSearch } from "react-icons/io5";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="hero-container flex p-4 bg-[url(/images/hero_image.png)] min-h-[92vh] bg-left md:bg-center bg-cover text-white">
      <div className="flex flex-col justify-center items-start gap-10  py-44 px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  max-w-xs md:max-w-xl leading-tight">
          Discover Your Next{" "}
          <span className="text-blue-400">Favorite Movie</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-xs md:max-w-xl leading-relaxed">
          Explore thousands of movies, check ratings, read reviews and find the
          preferred movie for your next night in.
        </p>

        <div className="flex  items-center border-2 border-indigo-600 rounded-lg">
          <div className="text-2xl px-1.5"><IoSearch /></div>
          <input
            className="p-1.5 text-white outline-none"
            type="text"
            placeholder="Search for movies..."
          />
          <button className="ml-1.5 bg-blue-600 px-2.5 rounded-sm min-h-full hover:bg-blue-800 cursor-pointer transition-color duration-300">Search</button>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
