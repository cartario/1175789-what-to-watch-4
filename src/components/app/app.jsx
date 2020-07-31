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
import {ActionCreator} from "../../reducer/reducer.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import FullPlayer from "../full-player/full-player.jsx";
import AddReview from "../add-review/add-review.jsx";

const App = (props) => {
  const {
    films,
    authorizationStatus,
    login,
    currentGenre,
    onFilterClick,
  } = props;

  if (!props.isDataReady) {
    return null;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoutes.ROOT}
          render={()=>
            // authorizationStatus === `NO_AUTH` ? <SignIn login={login}/> :
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
        <Route exact path={AppRoutes.MY_LIST}>
          <h1>MyList</h1>
        </Route>
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
        <Route
          path={`${AppRoutes.MOVIE_PAGE}/:id/review`}
          render={({match}) => (
            <AddReview
              films = {films}
              activeFilmId = {match.params.id}
            />
          )}
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
  isDataReady: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentGenre: getCurrentGenre(state),
  isDataReady: getReadyData(state),
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
