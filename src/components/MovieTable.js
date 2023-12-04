import React from 'react';
import MovieCard from './MovieCard';

function MovieTable({ movies }) {
  return (
    <div className="results">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieTable;