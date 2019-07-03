import React from 'react';
import Landing from '../../components/landing/Landing';
import Countdown from '../../components/countdown/Countdown';
import Footer from '../../components/footer/Footer';
import SearchList from '../../components/moviesResults/SearchList';
import { Consumer } from '../../context';
import Loading from '../../components/loading/Loading';
import Search from '../../components/search/Search';
const SearchMovie = () => {
  return (
    <Consumer>
      {value => {
        if (value.isSearchLoading) {
          return (
            <React.Fragment>
              <Landing />
              <Search />
              <Countdown />
              <Loading />
              <Footer />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <Landing />
              <Search />
              <Countdown />
              <SearchList />
              <Footer />
            </React.Fragment>
          );
        }
      }}
    </Consumer>
  );
};

export default SearchMovie;
