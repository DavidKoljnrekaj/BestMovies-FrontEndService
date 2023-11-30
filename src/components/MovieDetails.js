import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';

function MovieDetails({ match }) {
  const [details, setDetails] = useState(null);
  let { movieId } = useParams();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

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
