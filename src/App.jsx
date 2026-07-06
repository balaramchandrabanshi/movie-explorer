import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import MoviesList from "./components/MoviesList";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <MoviesList></MoviesList>
    </div>
  );
};

export default App;
