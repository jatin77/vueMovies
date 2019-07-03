import React from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
const TopMoviesItem = ({ topMovie }) => {
  const movieImgUrl = 'https://image.tmdb.org/t/p/w185';
  let currentGenreArray = [];
  let tempOverview = '';
  return (
    <Consumer>
      {value => {
        const { genres } = value;
        let tempGenre = genres;

        if (topMovie.overview.length >= 50) {
          tempOverview = topMovie.overview.substring(0, 50) + '...';
        } else {
          tempOverview = topMovie.overview;
        }

        return (
          <div className='movie-card'>
            <div className='movie-card-img'>
              <img src={movieImgUrl + topMovie.poster_path} alt='' />
            </div>
            <div className='movie-card-content'>
              <p className='movie-card-content-title'>{topMovie.title}</p>
              <div className='movie-card-content-genre'>
                {topMovie.genre_ids.forEach(genreCollection => {
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
                <small> {topMovie.release_date}</small>
              </p>
              <p className='movie-card-content-overview'>{tempOverview}</p>
              <p className='movie-card-content-vote_avg'>
                {topMovie.vote_average}
              </p>
              <Link
                className='movie-card-content-info'
                to={`/movie/details/${topMovie.id}`}
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

export default TopMoviesItem;
