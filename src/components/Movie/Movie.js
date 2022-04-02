import React from 'react';
import './Movie.css';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = (props) => {
   const {title, poster_path, overview, vote_average} = props.movie;
    return (
        <div className='movie'>
              <img className='movie_img' src={IMG_API + poster_path} alt={title}/>
              <div className="movie-info">
                  <h3>{title}</h3>
                  <span>{vote_average}</span>
              </div>
        </div>
    );
};

export default Movie;