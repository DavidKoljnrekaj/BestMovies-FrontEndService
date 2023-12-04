import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieList } from '../services/movieService';
import './MovieList.js.css';


function MovieList() {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);

  const findMovies = async (type) => {
    try {
      const response = await getMovieList(type);
      setMovies(response.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
  useEffect(() => {
    findMovies(type);
  }, [type]);

  return (
    <div>
      <h1>{type.replace('_', ' ').toUpperCase()} Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;