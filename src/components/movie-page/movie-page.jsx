import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs.jsx";
import ControlsBtnList from "../controls-btn-list/controls-btn-list.jsx";
import { connect } from "react-redux";
import {getAllFilms, getReadyData, getActiveFilmId} from "../../selectors.js";

const MoviePage = (props) => {
  // if(!props.isDataReady) return null;

  const {films, authorizationStatus, activeFilmId} = props;
  
  const currentMovie = films.find((film) => film.id === activeFilmId);

  const {title, posterImage, genre, released} = currentMovie;

  const showSimilar = `similar`;

  return (
  <>
  <section className="movie-card movie-card--full">
    <div className="movie-card__hero">

      <Header
        films ={films}
        authorizationStatus = {authorizationStatus}
        currentMovie = {currentMovie}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{released}</span>
          </p>

          <div className="movie-card__buttons">

            <ControlsBtnList />

            <a href="add-review.html" className="btn movie-card__button">Add review</a>

          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={posterImage} alt={title} width="218" height="327"/>
        </div>

        <Tabs/>

      </div>
    </div>
  </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesList showSimilar = {showSimilar}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>);
};

MoviePage.propTypes = {
  films: PropTypes.array.isRequired, 
  authorizationStatus: PropTypes.string.isRequired, 
};

const mapStateToProps = (state) => ({
  activeFilmId: getActiveFilmId(state),
  isDataReady: getReadyData(state),
  films: getAllFilms(state),
})

export {MoviePage};
export default connect(mapStateToProps)(MoviePage)
