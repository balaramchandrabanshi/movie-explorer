import React from "react";

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
      </div>
    </div>
  );
};

export default Hero;
