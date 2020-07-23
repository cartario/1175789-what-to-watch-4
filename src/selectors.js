import NameSpace from "./reducer/name-space/name-space.js";

export const getCurrentGenre = (state) => {
  return state[NameSpace.CURRENT_GENRE].currentGenre;
};

export const getAllFilms = (state) => {
  return state[NameSpace.FILMS].films;
};

export const getFilmsByFilter = (state) => {
  return state[NameSpace.FILMS].filmsByGenre;
};

export const getAuthorizationStatus = (state) => {

  return state[NameSpace.USER].authorizationStatus;
};

export const getCurrentMovie = (state) => {
  return state[NameSpace.FILMS].currentMovie;
};

export const getAllComments = (state) => {
  return state[NameSpace.FILMS].comments;
};
