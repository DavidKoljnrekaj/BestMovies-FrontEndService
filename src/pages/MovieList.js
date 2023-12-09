import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieList } from '../services/movieService';
import MovieTable from '../components/MovieTable';
import Pagination from '../components/Pagination';
import './MovieList.js.css';


function MovieList() {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(20);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const findMovies = async (type) => {
    try {
      const response = await getMovieList(type, currentPage);
      setMovies(response.results);
      setTotalPages(response.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }
  useEffect(() => {
    setCurrentPage(1);
    findMovies(type);
  }, [type]);

  useEffect(() => {
      findMovies(type);
  }, [currentPage]);

  return (
    <div>
    <h1 className='title'>{type.replace('_', ' ').toUpperCase()} MOVIES:</h1>
    <MovieTable movies={movies} />
    <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
  </div>
  );
}

export default MovieList;