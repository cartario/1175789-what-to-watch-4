import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import ControlsBtnList from "../controls-btn-list/controls-btn-list.jsx";
import {connect} from "react-redux";
import {getAllFilms} from "../../selectors.js";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../const.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getCurrentMovie} from "../../selectors.js";

const MoviePage = (props) => {
  const {films, authorizationStatus, activeFilmId} = props;

  const currentMovie = getCurrentMovie(films, activeFilmId);

  const {title, posterImage, genre, released} = currentMovie;

  const showSimilar = `similar`;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <Header
            films={films}
            authorizationStatus={authorizationStatus}
            currentMovie={currentMovie}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <ControlsBtnList activeFilmId={activeFilmId} currentMovie = {currentMovie}/>
                {authorizationStatus === AuthorizationStatus.AUTH
                  ?
                  <Link to={`${AppRoutes.MOVIE_PAGE}/${activeFilmId}/review`} className="btn movie-card__button">
                    Add review
                  </Link>
                  : ``}

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={title} width="218" height="327" />
            </div>

            <Tabs activeFilmId={activeFilmId}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList showSimilar={showSimilar} activeFilmId={activeFilmId}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to = {AppRoutes.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
      })
  ).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  activeFilmId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  films: getAllFilms(state),
});

export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
