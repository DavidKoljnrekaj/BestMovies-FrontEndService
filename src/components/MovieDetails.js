import React, { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/movieService';

function MovieDetails({ match }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(match.params.movieId);
        setDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [match.params.movieId]);

  return (
    <div>
      <h1>Movie Details</h1>
      {details && (
        <div>
          <h2>{details.title}</h2>
          <p>{details.overview}</p>
          {/* Display other details as needed */}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
