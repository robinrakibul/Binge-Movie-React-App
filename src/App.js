import './App.css';
import Movie from './components/Movie/Movie';

function App() {
  const movies = ['1','2','3'];
  return (
    <div className="App">
      <p>Hello App Js</p>
      {
        movies.map(movie =>(<Movie movies={movies}></Movie>))
      }
    </div>
  );
}

export default App;
