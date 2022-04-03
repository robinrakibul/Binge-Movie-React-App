import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a7a9f509d8c20ce68bfea9beb5c502f3&page=1";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=a7a9f509d8c20ce68bfea9beb5c502f3&query=";

function App() {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    fetch(FEATURED_API)
    .then(res=> res.json())
    .then(data =>setMovies(data.results))
  },[])
  return (
    <div>
      <Header></Header>
      <div className="movie_container">
        {
          movies.length>0 && movies.map(movie => (<Movie key={movie.id} movie={movie}></Movie>))
        }
      </div>
    </div>
  );
}

export default App;
