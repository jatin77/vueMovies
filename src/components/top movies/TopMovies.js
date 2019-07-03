import React, { useState } from 'react';
import { Consumer } from '../../context';
import TopMoviesItem from './TopMoviesItem';
import PaginationTop from './PaginationTop';

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  //get current Posts

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = topMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <Consumer>
      {value => {
        const { top_movies } = value;
        setTopMovies(top_movies);
        return (
          <div className='container top-movies'>
            <h1>Top rated movies</h1>
            <div className='top-movies-content'>
              {currentMovies.map(movie => (
                <TopMoviesItem key={movie.id} topMovie={movie} />
              ))}
            </div>
            <PaginationTop
              moviesPerPage={moviesPerPage}
              totalMovies={topMovies.length}
              paginate={paginate}
            />
          </div>
        );
      }}
    </Consumer>
  );
};

export default TopMovies;
