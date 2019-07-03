import React from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
const MovieResultItem = ({ movie }) => {
  const movieImgUrl = 'https://image.tmdb.org/t/p/w185';
  let currentGenreArray = [];
  let tempOverview = '';
  return (
    <Consumer>
      {value => {
        const { genres } = value;
        let tempGenre = genres;
        if (movie.overview.length >= 50) {
          tempOverview = movie.overview.substring(0, 50) + '...';
        } else {
          tempOverview = movie.overview;
        }

        return (
          <div className='movie-card'>
            <div className='movie-card-img'>
              <img src={movieImgUrl + movie.poster_path} alt='' />
            </div>
            <div className='movie-card-content'>
              <p className='movie-card-content-title'>{movie.title}</p>
              <div className='movie-card-content-genre'>
                {movie.genre_ids.forEach(genreCollection => {
                  tempGenre.forEach(genreState => {
                    if (genreCollection === genreState.id) {
                      currentGenreArray = [
                        ...currentGenreArray,
                        genreState.name
                      ];
                    }
                  });
                })}
                {currentGenreArray.map(item => (
                  <span key={uuid()}>
                    <small>{item}</small>
                  </span>
                ))}
              </div>
              <p className='movie-card-content-releaseDate'>
                <small>{movie.release_date}</small>
              </p>
              <p className='movie-card-content-overview'>{tempOverview}</p>
              <p className='movie-card-content-vote_avg'>
                {movie.vote_average}
              </p>
              <Link
                className='movie-card-content-info'
                to={`/movie/details/${movie.id}`}
              >
                <button>Know more</button>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default MovieResultItem;
