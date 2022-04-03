import React from 'react';
import './Movie.css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) =>{
    if(vote>=8){
        return "green";
    } 
    else if (vote>=6) {
        return "orange";
    }
    else {
        return "red";
    }
}
const Movie = (props) => {
   const {title, poster_path, overview, vote_average} = props.movie;
    return (
        <div className='movie'>
              <img className='movie_img' src={IMG_API + poster_path} alt={title}/>
              <div className="movie_info">
                  <h3>{title}</h3>
                  <span className={ `tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
              </div>
              <div className="movie_overview">
                  <h2>Overview:</h2>
                  <p>{overview}</p>
              </div>
        </div>
    );
};

export default Movie;