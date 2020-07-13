import React from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import PropTypes from "prop-types";
import NameSpace from "../../reducer/name-space/name-space.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";


const App = (props) => {

  const {movieInfo, onMovieButtonClick, films, filmsByGenre, currentGenre, onFilterClick, login, authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Main movieInfo = {movieInfo}
        onMovieButtonClick = {onMovieButtonClick}
        films = {films}
        filmsByGenre = {filmsByGenre}
        currentGenre = {currentGenre}
        onFilterClick = {onFilterClick}
        authorizationStatus= {authorizationStatus}
      />
    );
  }

  return <SignIn login = {login} authorizationStatus= {authorizationStatus}/>;
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
};

export {App};

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
