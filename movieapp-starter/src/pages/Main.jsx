import React from "react";
import { useMovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";


const Main = () => {
  const {movies, loading} = useMovieContext()

  console.log({movies, loading})
  return <div> 
    <div className=" flex justify-center flex-wrap">
      {
   
          movies.map((movie) => <MovieCard key={movie.id} {...movie}  />)
      }
      
      </div>
      </div>;
};

export default Main;
