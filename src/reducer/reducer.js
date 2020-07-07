import {extend} from "../utils.js";
import films from "../mocks/films.js";

const ALL_GENRE = `All genres`;

const genresList = films
  .map((film)=>film.genre)
  .concat(ALL_GENRE)
  .reverse();

const genres = [...new Set(genresList)];

const initialState = {
  currentGenre: ALL_GENRE,
  films,
  filmsByGenre: films,
  genres,
};

export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
};

export const ActionCreator = {
  changeFilter: (genre) => ({
    type: `CHANGE_FILTER`,
    payload: genre,
  }),

  getFilmsByFilter: (genre) => ({
    type: `GET_MOVIES_BY_FILTER`,
    payload: genre,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER :

      return extend(state, {currentGenre: action.payload});

    case ActionType.GET_MOVIES_BY_FILTER:
      const selectedGenre = action.payload;
      let filteredFilms = [...films];      

      if (selectedGenre !== ALL_GENRE) {
        filteredFilms = state.films.filter((film) => film.genre === selectedGenre);
      }

      return extend(state, {filmsByGenre: filteredFilms});
    default :
      return state;
  }
};
