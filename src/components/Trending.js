import React from 'react';
import { Link } from 'react-router-dom';
import MovieTable from '../components/MovieTable';
import './Trending.js.css';
import MovieCard from './MovieCard';
//genre icons
import action from '../icons/action.jpg';
import biography from '../icons/biography.jpg';
import comedy from '../icons/comedy.jpg';
import detective from '../icons/detective.jpg';
import drama from '../icons/drama.jpg';
import fantasy from '../icons/fantasy.jpg';
import history from '../icons/history.jpg';
import horror from '../icons/horror.jpg';
import musical from '../icons/musical.jpg';
import mystery from '../icons/mystery.jpg';
import romance from '../icons/romance.jpg';
import scienceFiction from '../icons/science-fiction.jpg';
import sport from '../icons/sport.jpg';
import thriller from '../icons/thriller.jpg';
import war from '../icons/war.jpg';
import western from '../icons/western.jpg';
const genreImages = {
  'Action': action,'Biography' : biography,'Comedy' : comedy,'Detective' : detective,'Drama' : drama,'Fantasy' : fantasy,'History' : history,'Horror' : horror,
  'Musical' : musical,'Mystery' : mystery,'Romance' : romance,'Science Fiction' : scienceFiction,'Sport' : sport,'Thriller' : thriller,'War' : war,'Western' : western,
};
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

function Trending({ trendingMovies, highestRatedMovie, mostPopularGenre, mostFrequentActor }) {
    const posterUrl = `${BASE_IMAGE_URL}${mostFrequentActor.profile_path}`;
    const genreIcon = genreImages[mostPopularGenre];

    return (
      <>
        <h2 className="trending-title">Trending today:</h2>
        <MovieTable movies={trendingMovies} />
        <div className="statistics">
          <div className="statistic-item">
            <h3>Highest Rated Movie Today</h3>
            {highestRatedMovie && (
              <MovieCard key={highestRatedMovie.id} movie={highestRatedMovie} />
            )}
          </div>
          <div className="statistic-item">
            <h3>Most Popular Genre Today</h3>
            <img src={genreIcon} alt={mostPopularGenre} />
          </div>
          <div className="statistic-item">
            <h3>Most Frequent Actor in Trending</h3>
            {mostFrequentActor && (
              <Link to={`/actors/${mostFrequentActor.id}`} key={mostFrequentActor.id} className="actor-card">
              <div className="actor-card-image" style={{ backgroundImage: `url(${posterUrl})` }} />
              <h2 className="actor-card-title">{mostFrequentActor.name}</h2>
                </Link>
            )}
          </div>
        </div>
      </>
    );
  }
  
  export default Trending;
