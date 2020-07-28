import React from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {ActionCreator as FilmsReducerAC} from "../../reducer/films-by-genre/films-by-genre.js";
// import {AuthorizationStatus} from "../../reducer/user/user.js";
import {history} from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import {AppRoutes} from "../../const.js";
import MoviePage from "../movie-page/movie-page.jsx";
import {getCurrentGenre, getCurrentMovie, getAllFilms, getFilmsByFilter, getAuthorizationStatus} from "../../selectors.js";
import FullPlayer from "../full-player/full-player.jsx";

const onMovieButtonClick = () => {};

const App = (props) => {
  const {films, filmsByGenre, currentGenre, onFilterClick, login, authorizationStatus,
    addListClick, removeListClick, activeFilm, currentMovie} = props;

  return (
    <Router history = {history}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main
            onMovieButtonClick = {onMovieButtonClick}
            films = {films}
            filmsByGenre = {filmsByGenre}
            currentGenre = {currentGenre}
            onFilterClick = {onFilterClick}
            authorizationStatus= {authorizationStatus}
            addListClick = {addListClick}
            removeListClick = {removeListClick}
            activeFilm = {activeFilm}
            currentMovie={currentMovie}
          />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <SignIn login = {login}/>
        </Route>
        <Route exact path={AppRoutes.MY_LIST}>
          <h1>MyList</h1>
        </Route>
        <Route path={AppRoutes.MOVIE_PAGE}>
          <MoviePage
            authorizationStatus= {authorizationStatus}
            films={films}
            currentMovie={currentMovie}
            onFilterClick = {onFilterClick}
            currentGenre = {currentGenre}/>
        </Route>
        <Route path={`${AppRoutes.PLAYER}/:id`}
          render = {(pros) => {
            return (
              <FullPlayer
                currentMovie={currentMovie}
                activeFilm = {activeFilm}
                films = {films}
                match = {pros.match}
              />
            );
          }}
        />


      </Switch>
    </Router>
  );
};

App.propTypes = {
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
  match: PropTypes.any,
  currentMovie: PropTypes.shape({}),
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

  activeFilm(film) {
    dispatch(FilmsReducerAC.activeFilm(film));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
