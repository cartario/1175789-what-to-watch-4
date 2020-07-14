import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import NameSpace from "../../reducer/name-space/name-space.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {history} from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import {AppRoute} from "../../const.js";

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const onMovieButtonClick = () => {};

class App extends PureComponent {

  _renderMain() {
    const {films, filmsByGenre, currentGenre, onFilterClick, login, authorizationStatus} = this.props;

    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <Main movieInfo = {MovieInfo}
          onMovieButtonClick = {onMovieButtonClick}
          films = {films}
          filmsByGenre = {filmsByGenre}
          currentGenre = {currentGenre}
          onFilterClick = {onFilterClick}
          authorizationStatus= {authorizationStatus}
        />
      );

    }

    return (
      <SignIn login = {login} authorizationStatus= {authorizationStatus}/>
    );


  }

  render() {
    const {login, authorizationStatus} = this.props;

    return (
      <Router history = {history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderMain()}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn login = {login} authorizationStatus= {authorizationStatus}/>
          </Route>
        </Switch>
      </Router>

    );
  }
}


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

const mapStateToProps = (state) => ({
  currentGenre: getCurrentGenre(state),
  films: getAllFilms(state),
  filmsByGenre: getFilmsByFilter(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(genre) {
    dispatch(ActionCreator.changeFilter(genre));
    dispatch(ActionCreator.getFilmsByFilter(genre));
  },

  login(authData) {
    dispatch(UserOperation.login(authData));
  }

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
