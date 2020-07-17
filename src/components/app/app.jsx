import React from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import NameSpace from "../../reducer/name-space/name-space.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";
// import {AuthorizationStatus} from "../../reducer/user/user.js";
import {history} from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import {AppRoutes} from "../../const.js";
import MoviePage from "../movie-page/movie-page.jsx";

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const onMovieButtonClick = () => {};

const App = (props) => {
  const {films, filmsByGenre, currentGenre, onFilterClick, login, authorizationStatus,
    addListClick, removeListClick, activeFilm, currentMovie} = props;

  return (
    <Router history = {history}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main movieInfo = {MovieInfo}
            onMovieButtonClick = {onMovieButtonClick}
            films = {films}
            filmsByGenre = {filmsByGenre}
            currentGenre = {currentGenre}
            onFilterClick = {onFilterClick}
            authorizationStatus= {authorizationStatus}
            addListClick = {addListClick}
            removeListClick = {removeListClick}
            activeFilm = {activeFilm}
          />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <SignIn login = {login} authorizationStatus= {authorizationStatus}/>
        </Route>
        <Route exact path={AppRoutes.MY_LIST}>
          <h1>MyList</h1>
        </Route>
        <Route exact path={AppRoutes.MOVIE_PAGE}>
          <MoviePage films={films} currentMovie={currentMovie}/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  movieInfo: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    YEAR: PropTypes.number.isRequired,
    TITLE: PropTypes.string.isRequired,
  }),
  onMovieButtonClick: PropTypes.func,
  films: PropTypes.array.isRequired,
  filmsByGenre: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  addListClick: PropTypes.func.isRequired,
  removeListClick: PropTypes.func.isRequired,
  activeFilm: PropTypes.func.isRequired,
  currentMovie: PropTypes.number.isRequired,
};


const getCurrentGenre = (state) => {
  return state[NameSpace.CURRENT_GENRE].currentGenre;
};

const getAllFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

const getFilmsByFilter = (state) => {
  return state[NameSpace.FILMS].filmsByGenre;
};

const getAuthorizationStatus = (state) => {

  return state[NameSpace.USER].authorizationStatus;
};

const getCurrentMovie = (state) => {
  return state[NameSpace.FILMS].activeFilmId;
};

const mapStateToProps = (state) => ({
  currentGenre: getCurrentGenre(state),
  films: getAllFilms(state),
  filmsByGenre: getFilmsByFilter(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentMovie: getCurrentMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
    dispatch(ActionCreator.getFilmsByFilter(genre));
  },

  addListClick(userId) {
    dispatch(FilmsReducerAC.addWatchList(userId));
  },

  removeListClick(userId) {
    dispatch(FilmsReducerAC.removeWatchList(userId));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },

  activeFilm(userId) {
    dispatch(FilmsReducerAC.activeFilm(userId));
  },

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
