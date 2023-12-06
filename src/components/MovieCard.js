import { Link } from 'react-router-dom';
import './MovieCard.js.css';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

function MovieCard({ movie }) {
  const posterUrl = `${BASE_IMAGE_URL}${movie.poster_path}`;

  return (
    <Link to={`/movies/${movie.id}`} key={movie.id} className="card">
      <div className="card-image" style={{ backgroundImage: `url(${posterUrl})` }} />
      <h2 className="card-title">{movie.title}</h2>
    </Link>
  );
}

export default MovieCard;