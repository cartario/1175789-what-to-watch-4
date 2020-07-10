import {combineReducers} from "redux";
import {reducer as currentGenre} from "./current-genre/current-genre.js";
import {reducer as filmsByGenre} from "./films-by-genre/films-by-genre.js";

import NameSpace from "./name-space/name-space.js";

export const ActionCreator = {
  changeFilter: (genre) => ({
    type: `CHANGE_FILTER`,
    payload: genre,
  }),

  getFilmsByFilter: (genre) => ({
    type: `GET_MOVIES_BY_FILTER`,
    payload: genre,
  }),
};

export const reducers = combineReducers({
  [NameSpace.CURRENT_GENRE]: currentGenre,
  [NameSpace.FILMS]: filmsByGenre,
});
