import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieList } from '../services/movieService';
import MovieTable from './MovieTable';
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
    <MovieTable movies={movies} />
  </div>
  );
}

export default MovieList;