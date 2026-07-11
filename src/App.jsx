import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import PopularMovies from "./components/PopularMovies";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <PopularMovies />
    </div>
  );
};

export default App;
