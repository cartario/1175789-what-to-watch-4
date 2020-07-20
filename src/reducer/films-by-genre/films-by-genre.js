import films from "../../mocks/films.js";
import {extend} from "../../utils.js";

const ALL_GENRE = `All genres`;

const initialState = {
  films,
  comments: [],
  filmsByGenre: [],
  currentMovie: {},
};

export const ActionType = {
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
  GET_MOVIES_FROM_SERVER: `GET_MOVIES_FROM_SERVER`,
  GET_COMMENTS_FROM_SERVER: `GET_COMMENTS_FROM_SERVER`,
  ADD_WATCH_LIST: `ADD_WATCH_LIST`,
  REMOVE_WATCH_LIST: `REMOVE_WATCH_LIST`,
  SET_ACTIVE_FILM: `SET_ACTIVE_FILM`,
};

export const ActionCreator = {

  loadFilms: (filmsList) => {

    return {
      type: ActionType.GET_MOVIES_FROM_SERVER,
      payload: filmsList,
    };
  },

  addWatchList: (userId) => {

    return {
      type: ActionType.ADD_WATCH_LIST,
      payload: userId,
    };
  },

  removeWatchList: (userId) => {
    return {
      type: ActionType.REMOVE_WATCH_LIST,
      payload: userId,
    };
  },

  activeFilm: (film) => {
    return {
      type: ActionType.SET_ACTIVE_FILM,
      payload: film,
    };
  },

  loadComments: (commentsList) => {
    return {
      type: ActionType.GET_COMMENTS_FROM_SERVER,
      payload: commentsList,
    };
  },


};

const adapter = (data) => {
  return data.map((film) => ({
    id: film.id,
    title: film.name,
    src: film.preview_image,
    preview: film.preview_video_link,
    genre: film.genre,
    rating: film.rating,
    scoresCount: film.scores_count,
    description: film.description,
    director: film.director,
    starring: film.starring,
    released: film.released,
    backgroundImage: film.background_image,
    posterImage: film.poster_image,
    runTime: film.run_time,
    isFavorite: film.is_favorite,

  }));
};

const commentAdapter = (data) => {

  return data;
};

export const Operation = {

  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const dataFromAdapter = adapter(response.data);
        dispatch(ActionCreator.loadFilms(dataFromAdapter));
        dispatch({type: ActionType.GET_MOVIES_BY_FILTER, payload: ALL_GENRE});
        dispatch({type: ActionType.SET_ACTIVE_FILM, payload: adapter((response.data))[0]});
      });
  },

  loadComments: () => (dispatch, getState, api) => {

    return api.get(`/comments/7`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(commentAdapter(response.data)));
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

    case ActionType.ADD_WATCH_LIST: {
      const filmsList = state.films.map((film)=> {
        if (film.id === action.payload) {
          return extend(film, {isFavorite: true});
        }
        return film;
      });

      return extend(state, {films: filmsList});
    }

    case ActionType.REMOVE_WATCH_LIST: {
      const filmsList = state.films.map((film)=> {
        if (film.id === action.payload) {
          return extend(film, {isFavorite: false});
        }
        return film;
      });

      return extend(state, {films: filmsList});
    }

    case ActionType.SET_ACTIVE_FILM: {

      return extend(state, {currentMovie: action.payload});
    }

    case ActionType.GET_COMMENTS_FROM_SERVER:
      return extend(state, {comments: action.payload});

    default:
      return state;
  }
};


