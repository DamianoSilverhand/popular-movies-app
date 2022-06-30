import React,{useState,useEffect} from 'react';

import '../App.css';
import MovieCard from '../components/MovieCard';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

function Home() {

const [movies, setMovies]=useState([]);

useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      setMovies(data.results);
    })
  }, []);

  return (
    <div>
      {movies.length > 0 ?(
        <div className="container-fluid">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieCard key={movieReq.id} {...movieReq}/>)}
        </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
  );
}

export default Home;
