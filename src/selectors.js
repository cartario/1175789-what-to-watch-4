import NameSpace from "./reducer/name-space/name-space.js";
import {AuthorizationStatus} from "./reducer/user/user.js";

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
  return state[NameSpace.FILMS].isDataReady && state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;
};

export const getFavoriteFilms = (state) => {
  return state[NameSpace.FILMS].films.filter((film)=>film.isFavorite);
};

export const getCurrentMovie = (films, activeFilmId) => {
  const res = films.find(
      (film) => film.id === Number(activeFilmId)
  );
  return res;
};
