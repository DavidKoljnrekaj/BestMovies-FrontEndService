import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActorDetails, getActorMovies, getActorAverageRating } from '../services/castService';
import MovieCard from '../components/MovieCard';
import './ActorDetails.js.css';

function ActorDetails() {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);
  const [averageRating, setAverageRating] = useState([]);


  let { actorId } = useParams();

  useEffect(() => {
    const fetchActorDetails = async () => {
      const actorData = await getActorDetails(actorId);
      setActor(actorData);
      const actorMovies = await getActorMovies(actorId); 
      setMovies(actorMovies);
      const averageRating = await getActorAverageRating(actorId);
      setAverageRating(averageRating);
    };

    fetchActorDetails();
  }, [actorId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="actor-details">
      {actor && (
        <>
          <div className="header">
            <div className="image-details">
              <img src={`${BASE_IMAGE_URL}${actor.profile_path}`} alt={actor.name} className="details-image" />
              <div className="details">
                <div className="details-item">
                  Gender: {actor.gender === 1 ? 'Female' : actor.gender === 2 ? 'Male' : 'Unknown'}
                </div>
                <div className="details-item">Birth Date: {actor.birthday}</div>
                <div className="details-item">Place of Birth: {actor.place_of_birth}</div>
                <div className="details-item">
                  Average rating: {" "}
                  <div className="vote-average">
                    <span style={{width: `${averageRating * 10}%`}}></span>
                  </div>
                  <span className="vote-average-number">{averageRating}/10</span>
                </div>
              </div>
            </div>
            <div className="name-bio">
              <h1 className="actor-name">{actor.name}</h1>
              <p className="biography">{actor.biography}</p>
            </div>
          </div>
          <h2>Known For</h2>
              <div className="movies">
                {movies.map(movie => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
        </>
      )}
    </div>
  );
}

export default ActorDetails;