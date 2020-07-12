import films from "../../mocks/films.js";
import {extend} from "../../utils.js";

const ALL_GENRE = `All genres`;

const initialState = {
  films,
  filmsByGenre: [],
};

export const ActionType = {
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
  GET_MOVIES_FROM_SERVER: `GET_MOVIES_FROM_SERVER`,
};

const ActionCreator = {

  loadFilms: (filmsList) => {

    return {
      type: ActionType.GET_MOVIES_FROM_SERVER,
      payload: filmsList,
    };
  }
};

const adapter = (data) => {
  return data.map((film) => ({
    id: film.id,
    title: film.name,
    src: film.preview_image,
    preview: film.preview_video_link,
    genre: film.genre,
  }));
};

export const Operation = {

  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const dataFromAdapter = adapter(response.data);
        dispatch(ActionCreator.loadFilms(dataFromAdapter));
        dispatch({type: ActionType.GET_MOVIES_BY_FILTER, payload: ALL_GENRE});
      });
  },
};

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.GET_MOVIES_BY_FILTER:
      const selectedGenre = action.payload;
      let filteredFilms = [...state.films];

      if (selectedGenre !== ALL_GENRE) {
        filteredFilms = state.films.filter((film) => film.genre === selectedGenre);

      }

      return extend(state, {filmsByGenre: filteredFilms});
    case ActionType.GET_MOVIES_FROM_SERVER:
      return extend(state, {films: action.payload});
    default:
      return state;
  }
};
