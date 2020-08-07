import {combineReducers} from "redux";
import {reducer as currentGenre} from "./current-genre/current-genre.js";
import {reducer as filmsByGenre} from "./films-by-genre/films-by-genre.js";
import {reducer as userReducer} from "./user/user.js";

import NameSpace from "./name-space/name-space.js";

export const reducers = combineReducers({
  [NameSpace.CURRENT_GENRE]: currentGenre,
  [NameSpace.FILMS]: filmsByGenre,
  [NameSpace.USER]: userReducer,
});
