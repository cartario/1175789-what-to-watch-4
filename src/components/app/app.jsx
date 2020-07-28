import React from "react";
import PropTypes from "prop-types";

import {AppRoutes} from "../../const.js";

import {history} from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";

import {connect} from "react-redux";
import {getCurrentGenre, getAllFilms, getAuthorizationStatus} from "../../selectors.js";
import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import FullPlayer from "../full-player/full-player.jsx";

const App = (props) => {
  const {films, authorizationStatus, login, currentGenre, onFilterClick} = props;

  return (
    <Router history = {history}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main
            films = {films}
            authorizationStatus= {authorizationStatus}
            currentGenre = {currentGenre}
            onFilterClick = {onFilterClick}
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
          />
        </Route>
        <Route path={`${AppRoutes.PLAYER}/:id`}
          render = {(pros) => {
            return (
              <FullPlayer
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
  films: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
    dispatch(ActionCreator.getFilmsByFilter(genre));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
