import React from "react";
import PropTypes from "prop-types";

import {AppRoutes} from "../../const.js";

import {history} from "../../history.js";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {
  getCurrentGenre,
  getAllFilms,
  getAuthorizationStatus,
  getReadyData,
} from "../../selectors.js";
import {ActionCreator} from "../../reducer/films-by-genre/films-by-genre.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import FullPlayer from "../full-player/full-player.jsx";
import AddReview from "../add-review/add-review.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import MyList from "../my-list/my-list.jsx";

const App = (props) => {
  const {
    films,
    authorizationStatus,
    login,
    currentGenre,
    onFilterClick,
    isLoadFilmsError,
    isCommentPostError
  } = props;

  if (isLoadFilmsError) {
    return <p style={{backgroundColor: `red`}}>Сервер временно недоступен. Проверьте подключение к интернету!</p>;
  }

  if (!props.isDataReady) {
    return null;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}
          render={()=>
            <Main
              films={films}
              authorizationStatus={authorizationStatus}
              currentGenre={currentGenre}
              onFilterClick={onFilterClick}/>}
        />
        <Route exact path={AppRoutes.LOGIN}
          render={()=>
            authorizationStatus === `NO_AUTH` ? <SignIn login={login}/> :
              <Redirect to={AppRoutes.ROOT}/>
          }
        />
        <PrivateRoute
          path={`${AppRoutes.MOVIE_PAGE}/:id/review`}
          render={({match}) => {
            return (
              <AddReview
                films = {films}
                activeFilmId = {match.params.id}
                isCommentPostError = {isCommentPostError}
              />);
          }
          }
        />
        <Route
          exact path={`${AppRoutes.MOVIE_PAGE}/:id`}
          render={({match}) => (
            <MoviePage
              authorizationStatus={authorizationStatus}
              activeFilmId={match.params.id}
            />
          )}
        ></Route>
        <Route
          path={`${AppRoutes.PLAYER}/:id`}
          render={(pros) => {
            return <FullPlayer match={pros.match} />;
          }}
        />

        <PrivateRoute
          path={AppRoutes.MY_LIST}
          exact
          render = {() => {
            return (
              <MyList/>
            );
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
      })
  ).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  isDataReady: PropTypes.bool.isRequired,
  isLoadFilmsError: PropTypes.bool.isRequired,
  isCommentPostError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentGenre: getCurrentGenre(state),
  isDataReady: getReadyData(state),
  isLoadFilmsError: state.FILMS.isLoadFilmsError,
  isCommentPostError: state.FILMS.isCommentPostError,
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
