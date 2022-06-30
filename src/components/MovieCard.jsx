import React, {useState} from 'react';
const POSTER_IMG="https://image.tmdb.org/t/p/original/";

const MovieCard =({title, poster_path, release_date,vote_average, overview})=>{
    
  

    
    return(
        <div className="card text-center mb-3 col-lg-4">

        <div className="card-body cardcontainer">
            <div className="movie">
                <img alt="Movie Poster" src={POSTER_IMG+poster_path}/>
                <div className="movies">
                    <span className="">
                            <i className="fab fa-gratipay">
                            </i>
                            Like
                    </span>
                </div>
            </div>
            <div className="content">
                <h3 className="txt4">{title}</h3>
                <br/>
                <hr/>
                <h5 className="txt2"> Release Date: {release_date} </h5>
                <h5>IMDb Rating: {vote_average}</h5>
                {/* <p>{overview}</p> */}
            </div>
        </div>
            
        </div>
    )
}

export default MovieCard;