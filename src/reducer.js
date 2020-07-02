import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  genre: `AllGenres`,
  films,
};

export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
}

export const ActionCreator = {
  changeFilter: (genre) => ({
    type: 'CHANGE_FILTER',
    payload: genre,
  }),

  getFilmsByFilter: (genre) => ({
    type: `GET_MOVIES_BY_FILTER`,
    payload: genre,
  })
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.CHANGE_FILTER :
      
      return extend(state, {genre: action.payload});
    case ActionType.GET_MOVIES_BY_FILTER:
      const filteredFilms = state.films.filter((film) => film.genre === action.payload);
      return extend(state, {genre: action.payload, films: filteredFilms});
    default :
      return state;
  };
};
