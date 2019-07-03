import React, { useState } from 'react';
import { Consumer } from '../../context';
import MovieResultItem from './MovieResultItem';
import PaginationResults from './PaginationResults';

const SearchList = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  //get current Posts

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = searchMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <Consumer>
      {value => {
        const { results } = value;
        setSearchMovies(results);

        return (
          <div className='popular-movies container'>
            {results.length >= 1 ? <h1>Results</h1> : <h1>Search Movies</h1>}
            <div className='popular-movies-content'>
              {currentMovies.map(movie => (
                <MovieResultItem key={movie.id} movie={movie} />
              ))}
            </div>
            <PaginationResults
              moviesPerPage={moviesPerPage}
              totalMovies={searchMovies.length}
              paginate={paginate}
            />
          </div>
        );
      }}
    </Consumer>
  );
};

export default SearchList;
