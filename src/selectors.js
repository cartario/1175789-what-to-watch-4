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

export const getAllComments = (state) => {
  return state[NameSpace.FILMS].comments;
};

export const getReadyData = (state) => {
  return state[NameSpace.FILMS].isDataReady;
};
