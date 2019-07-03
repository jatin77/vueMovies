import React from 'react';
import Landing from '../../components/landing/Landing';
import Countdown from '../../components/countdown/Countdown';
import Footer from '../../components/footer/Footer';
import { Consumer } from '../../context';
import Loading from '../../components/loading/Loading';
import TopMovies from '../../components/top movies/TopMovies';
import PopMovies from '../../components/pop movies/PopMovies';

const Home = () => {
  return (
    <Consumer>
      {value => {
        const { top_movies, popular_movies } = value;

        if (top_movies.length > 0 && popular_movies.length > 0) {
          return (
            <React.Fragment>
              <Landing />
              <Countdown />
              <PopMovies />
              <TopMovies />
          
              <Footer />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <Landing />
              <Countdown />
              <Loading />
              <Footer />
            </React.Fragment>
          );
        }
      }}
    </Consumer>
  );
};

export default Home;
