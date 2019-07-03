import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

export class Provider extends Component {
  state = {
    searchText: '',
    search_URL: 'https://api.themoviedb.org/3/search/movie?api_key=',
    results: [],
    isSearchLoading: false,
    displaySideNav: false,

    placeholder: '',
    api: 'e6713b23198a2507a7db0374c7d22d05',
    youtubeUrl: ' https://www.youtube.com/watch?v=',
    movieTrailerUrl: 'https://api.themoviedb.org/3/movie/',
    movieImgUrl: 'https://image.tmdb.org/t/p/w780',

    SEARCH_URL: 'https://api.themoviedb.org/3/search/movie?api_key=',
    POPULAR_URL: 'https://api.themoviedb.org/3/movie/popular?api_key=',
    TOP_URL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=',
    top_movies: [],
    popular_movies: [],
    currentPage: 1,
    moviePerPage: 4,
    genres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 12,
        name: 'Adventure'
      },
      {
        id: 16,
        name: 'Animation'
      },
      {
        id: 35,
        name: 'Comedy'
      },
      {
        id: 80,
        name: 'Crime'
      },
      {
        id: 99,
        name: 'Documentary'
      },
      {
        id: 18,
        name: 'Drama'
      },
      {
        id: 10751,
        name: 'Family'
      },
      {
        id: 14,
        name: 'Fantasy'
      },
      {
        id: 36,
        name: 'History'
      },
      {
        id: 27,
        name: 'Horror'
      },
      {
        id: 10402,
        name: 'Music'
      },
      {
        id: 9648,
        name: 'Mystery'
      },
      {
        id: 10749,
        name: 'Romance'
      },
      {
        id: 878,
        name: 'Science Fiction'
      },
      {
        id: 10770,
        name: 'TV Movie'
      },
      {
        id: 53,
        name: 'Thriller'
      },
      {
        id: 10752,
        name: 'War'
      },
      {
        id: 37,
        name: 'Western'
      }
    ]
  };

  navToggleClicked = e => {
    this.setState(prevState => {
      return {
        ...this.state,
        displaySideNav: !prevState.displaySideNav
      };
    });
  };

  componentDidMount = () => {
    //display top and popular movies
    this.displayHomeList();
  };

  //display utop and popluar

  displayHomeList = () => {
    //popular movies
    axios
      .get(`${this.state.POPULAR_URL}${this.state.api}&language=en-US&page=1`)
      .then(res =>
        this.setState(() => {
          return {
            ...this.state,
            popular_movies: res.data.results
          };
        })
      )
      .catch(err => console.log(err));
    //top movies
    axios
      .get(`${this.state.TOP_URL}${this.state.api}&language=en-US&page=1`)
      .then(res =>
        this.setState(() => {
          return {
            ...this.state,
            top_movies: res.data.results
          };
        })
      );
  };

  searchHandle = e => {
    this.setState({
      ...this.state,
      searchText: e.target.value
    });
  };

  submitHandle = e => {
    e.preventDefault();
    this.setState({
      isSearchLoading: true
    });
    axios
      .get(
        `${this.state.search_URL}${this.state.api}&language=en-US&query=${
          this.state.searchText
        }&page=1&include_adult=false`
      )
      .then(response =>
        this.setState({
          results: response.data.results,
          searchText: '',
          isSearchLoading: false
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          navToggleClicked: this.navToggleClicked,
          showSearch: this.showSearch,
          searchHandle: this.searchHandle,
          submitHandle: this.submitHandle
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
