import React from 'react';

const Movie = (props) => {
    return (
        <div className='movie'>
          {
              props.movies
          }
        </div>
    );
};

export default Movie;