import React, { useState } from 'react';
import { Consumer } from '../../context';
import PopMovieItems from './PopMovieItems';
import PaginationPop from './PaginationPop';

const PopMovies = () => {
  const [popMovies, setPopMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  //get current Posts

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = popMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <Consumer>
      {value => {
        const { popular_movies } = value;
        setPopMovies(popular_movies);

        return (
          <div className='popular-movies container'>
            <h1>Popular movies </h1>
            <div className='popular-movies-content'>
              {currentMovies.map(movie => (
                <PopMovieItems key={movie.id} movie={movie} />
              ))}
            </div>
            <PaginationPop
              moviesPerPage={moviesPerPage}
              totalMovies={popMovies.length}
              paginate={paginate}
            />
          </div>
        );
      }}
    </Consumer>
  );
};

export default PopMovies;
