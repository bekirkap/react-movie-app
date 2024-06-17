import React, { useState } from "react";
import { useMovieContext } from "../context/MovieProvider";
import MovieCard from "../components/MovieCard";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;




const Main = () => {
  const {movies, loading, getMovies} = useMovieContext()
  const [searchTerm, setSearchTerm] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    getMovies(SEARCH_API+searchTerm)
 
  }

  console.log(searchTerm);
  return <div> 

    <form className="flex justify-center p-2" onSubmit={handleSubmit}>
    <input type="search"  className="w-80 h-8 rounded-md p-1 m-2" placeholder="Search a movie..." onChange={(e)=> setSearchTerm(e.target.value)}/>
    <button className="btn-danger-bordered">Search</button>

    </form>
    <div className=" flex justify-center flex-wrap">
      {
   
          movies.map((movie) => <MovieCard key={movie.id} {...movie}  />)
      }
      
      </div>
      </div>;
};

export default Main;
