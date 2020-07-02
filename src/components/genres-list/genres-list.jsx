import React from "react";

const GenresList = (props) => {
  const {films, genres, currentGenre, onFilterChange, onFilterChangeFilms} = props;

  const clickHandler = (e) => {
    e.preventDefault();
    onFilterChange(e.target.textContent);    
    // onFilterChangeFilms(e.target.textContent);
  }

  const genresList = films
    .map((film)=>film.genre)
    .concat(`All genres`)
    .reverse();

  const uniqGenres = [...new Set(genresList)];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre)=> 
        <li key={genre} className={currentGenre === genre ? `catalog__genres-item catalog__genres-item--active`: `catalog__genres-item`}>
          <a onClick={clickHandler} href="#" className="catalog__genres-link">{genre}</a>
        </li>
      )}
    </ul>
  )
};

export default GenresList;