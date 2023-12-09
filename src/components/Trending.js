import React from 'react';
import { Link } from 'react-router-dom';
import MovieTable from '../components/MovieTable';
import './Trending.js.css';
import MovieCard from './MovieCard';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

function Trending({ trendingMovies, highestRatedMovie, mostPopularGenre, mostFrequentActor }) {
    const posterUrl = `${BASE_IMAGE_URL}${mostFrequentActor.profile_path}`;
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
            <p>{mostPopularGenre}</p>
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
