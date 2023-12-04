import { Link } from 'react-router-dom';
import './MovieCard.js.css';

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} key={movie.id} className="card">
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </Link>
  );
}

export default MovieCard;