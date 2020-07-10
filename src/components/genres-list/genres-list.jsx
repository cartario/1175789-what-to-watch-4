import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {currentGenre, onFilterClick, films} = props;

  const ALL_GENRE = `All genres`;
  const genresList = films
  .map((film)=>film.genre)
  .concat(ALL_GENRE)
  .reverse();

  const genres = [...new Set(genresList)];

  let visibleGenres = genres;
  if (genres.length > 8) {
    visibleGenres = genres.slice(0, 8);
  }

  const clickHandler = (e) => {
    e.preventDefault();
    onFilterClick(e.target.textContent);
  };

  return (
    <ul className="catalog__genres-list">
      {visibleGenres.map((genre)=>
        <li key={genre} className={currentGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a onClick={clickHandler} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  );
};


GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default GenresList;
