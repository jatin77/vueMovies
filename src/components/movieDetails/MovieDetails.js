import React, { Component } from 'react';
import Landing from '../landing/Landing';
import Countdown from '../countdown/Countdown';
import Footer from '../footer/Footer';
import axios from 'axios';
import Loading from '../loading/Loading';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import YouTubePlayer from 'react-player/lib/players/YouTube';
class MovieDetails extends Component {
  state = {
    apiKey: 'e6713b23198a2507a7db0374c7d22d05',
    id: this.props.match.params.slug,
    youtubeUrl: ' https://www.youtube.com/watch?v=',
    movieTrailerUrl: 'https://api.themoviedb.org/3/movie/',
    logoImgUrl: 'https://image.tmdb.org/t/p/w185',
    gotoUrl: '',
    SEARCH_URL: 'https://api.themoviedb.org/3/movie/',
    displayTrailer: false,
    currentMovie: null,
   
    displayLoader: false
  };
  trailer = e => {
    e.preventDefault();
    console.log(this.state.id);
    this.setState(() => {
      return { ...this.state, displayLoader: true };
    });
    axios
      .get(
        `${this.state.movieTrailerUrl}${this.state.id}/videos?api_key=${
          this.state.apiKey
        }&language=en-US`
      )
      .then(response => {
        this.setState({
          gotoUrl: this.state.youtubeUrl + response.data.results[0].key,
          displayTrailer: true,
          displayLoader: false
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount = () => {
    axios
      .get(
        `${this.state.SEARCH_URL}${this.state.id}?api_key=${
          this.state.apiKey
        }&language=en-US`
      )
      .then(response =>
        this.setState(() => {
          return {
            currentMovie: response.data
          };
        })
      )
      .catch(err => console.log(err));
  };
  render() {
    const movieImgUrl = 'https://image.tmdb.org/t/p/w780';
    const { currentMovie } = this.state;
    let currentGenreArray = [];
    let trailer;
    if (this.state.displayTrailer && this.state.gotoUrl !== '') {
      trailer = (
        <YouTubePlayer
          url={this.state.gotoUrl}
          light
          width='100%'
          playing
          controls
        />
      );
    }

    return (
      <Consumer>
        {value => {
          if (currentMovie === null) {
            return (
              <React.Fragment>
                <Landing />
                <Countdown />
                <Loading />
                <Footer />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Landing />
                <Countdown />
                <div className='current-movie'>
                  <div className='current-movie-poster'>
                    <img
                      src={movieImgUrl + currentMovie.backdrop_path}
                      alt=''
                    />
                  </div>
                  <div className='current-movie-content'>
                    <p className='current-movie-content-title'>
                      {currentMovie.title}
                    </p>
                    <div className='current-movie-content-genre'>
                      {currentMovie.genres.forEach(genreCollection => {
                        value.genres.forEach(genreState => {
                          if (genreCollection.id === genreState.id) {
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
                    <div className='current-movie-triple-grid'>
                      <div className='current-movie-triple-grid-item'>
                        <div>
                          <i className='far fa-calendar-alt' />
                          <span>
                            {currentMovie.status === 'Released'
                              ? currentMovie.release_date
                              : '...'}
                          </span>
                        </div>
                        <p>
                          {currentMovie.status === 'Released'
                            ? 'Released'
                            : 'Unreleased'}{' '}
                        </p>
                      </div>
                      <div className='current-movie-triple-grid-item'>
                        <div>
                          <i className='far fa-clock' />
                          <span>{currentMovie.runtime} min</span>
                        </div>
                        <p>Length</p>
                      </div>
                      <div className='current-movie-triple-grid-item'>
                        <div>
                          {currentMovie.vote_average >= 7.5 ? (
                            <i className='fas fa-star' />
                          ) : (
                            <i className='far fa-star' />
                          )}
                          <span>{currentMovie.vote_average}</span>
                        </div>
                        <p>Vote </p>
                      </div>
                    </div>
                    <div className='current-movie-content-overview'>
                      <p>{currentMovie.overview}</p>
                    </div>
                    <div className='current-movie-content-companies'>
                      {currentMovie.production_companies.map(item => (
                        <div key={uuid()}>
                          <img src={movieImgUrl + item.logo_path} alt='' />
                          <p>
                            <small>{item.name}</small>
                          </p>
                          <p>
                            <small>{item.origin_country}</small>
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className='current-movie-content-link'>
                      <Link to='/'>
                        <button>Go Home</button>
                      </Link>{' '}
                      <button onClick={this.trailer}>Watch trailer</button>
                    </div>
                  </div>
                  {this.state.displayLoader ? <Loading /> : null}
                  {this.state.displayTrailer ? trailer : null}
                </div>
                <Footer />
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default MovieDetails;
