import {extend} from "../../utils.js";
import {history} from "../../history.js";
const ALL_GENRE = `All genres`;

const initialState = {
  films: [],
  filmPromo: {},
  comments: [],
  filmsByGenre: [],
  isDataReady: false,
  newComment: {},
  isCommentLoading: false,
  isReviewError: false,
  isReviewSent: false,
  isLoadFilmsError: false,
  isCommentPostError: false,
};

export const ActionType = {
  GET_FILM_PROMO: `GET_FILM_PROMO`,
  GET_MOVIES_BY_FILTER: `GET_MOVIES_BY_FILTER`,
  GET_MOVIES_FROM_SERVER: `GET_MOVIES_FROM_SERVER`,
  GET_COMMENTS_FROM_SERVER: `GET_COMMENTS_FROM_SERVER`,
  ADD_WATCH_LIST: `ADD_WATCH_LIST`,
  REMOVE_WATCH_LIST: `REMOVE_WATCH_LIST`,
  TOGGLE_IS_DATA_READY: `TOGGLE_IS_DATA_READY`,
  POST_NEW_COMENT: `POST_NEW_COMENT`,
  IS_COMMENT_LOADING: `IS_COMMENT_LOADING`,
  IS_REVIEW_ERROR: `IS_REVIEW_ERROR`,
  IS_REVIEW_SENT: `IS_REVIEW_SENT`,
  SET_LOAD_FILMS_ERROR: `SET_LOAD_FILMS_ERROR`,
  SET_COMMENT_POST_ERROR: `SET_COMMENT_POST_ERROR`,
};

export const ActionCreator = {
  setCommentPostError: (error) => ({
    type: ActionType.SET_COMMENT_POST_ERROR,
    payload: error,
  }),

  setLoadFilmsError: (error) => ({
    type: ActionType.SET_LOAD_FILMS_ERROR,
    payload: error,
  }),

  changeFilter: (genre) => ({
    type: `CHANGE_FILTER`,
    payload: genre,
  }),

  getFilmsByFilter: (genre) => ({
    type: `GET_MOVIES_BY_FILTER`,
    payload: genre,
  }),

  postNewComment: (commentPost) => {
    return {
      type: ActionType.POST_NEW_COMENT,
      payload: commentPost,
    };
  },

  setIsCommentLoading: (value) => {
    return {
      type: ActionType.IS_COMMENT_LOADING,
      payload: value,
    };
  },

  setIsReviewError: (value) => {
    return {
      type: ActionType.IS_REVIEW_ERROR,
      payload: value,
    };
  },

  setIsReviewSent: (value) => {
    return {
      type: ActionType.IS_REVIEW_SENT,
      payload: value,
    };
  },

  loadFilms: (filmsList) => {
    return {
      type: ActionType.GET_MOVIES_FROM_SERVER,
      payload: filmsList,
    };
  },

  getFilmPromo: (filmPromo) => {
    return {
      type: ActionType.GET_FILM_PROMO,
      payload: filmPromo,
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

  setIsDataReady: (value) => {
    return {
      type: ActionType.TOGGLE_IS_DATA_READY,
      payload: value,
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
    videoLink: film.video_link,
  }));
};

const adapterPromo = (film) => ({
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
  backgroundColor: film.background_color,
  posterImage: film.poster_image,
  runTime: film.run_time,
  isFavorite: film.is_favorite,
  videoLink: film.video_link,
});

export const Operation = {
  postNewComment: (userId, commentPost) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setIsCommentLoading(true));
    return api.post(`/comments/${userId}`, commentPost)
      .then((response) => {
        dispatch(ActionCreator.postNewComment(response.data));
        dispatch(ActionCreator.setIsReviewSent(true));
        dispatch(ActionCreator.setIsCommentLoading(false));
        dispatch(ActionCreator.setCommentPostError(false));
        history.goBack();
      })
      .catch((err) => {
        dispatch(ActionCreator.setIsCommentLoading(false));
        dispatch(ActionCreator.setIsReviewSent(false));
        dispatch(ActionCreator.setIsReviewError(true));
        dispatch(ActionCreator.setCommentPostError(true));
        throw err;
      });
  },

  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      const dataFromAdapter = adapter(response.data);
      dispatch(ActionCreator.loadFilms(dataFromAdapter));
      dispatch({type: ActionType.GET_MOVIES_BY_FILTER, payload: ALL_GENRE});
      dispatch(ActionCreator.setIsDataReady(true));
    })
    .catch((err) => {
      dispatch(ActionCreator.setLoadFilmsError(true));
      throw err;
    });
  },

  loadFilmPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      const dataFromAdapter = adapterPromo(response.data);
      dispatch(ActionCreator.getFilmPromo(dataFromAdapter));
    });
  },

  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`).then((response) => {
      dispatch(ActionCreator.loadComments(response.data));
    })
    .catch((err) => {
      throw err;
    });
  },

  postFavoriteFilm: (filmId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`favorite/${filmId}/${isFavorite}`);
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES_BY_FILTER:
      const selectedGenre = action.payload;
      let filteredFilms = [...state.films];
      if (selectedGenre !== ALL_GENRE) {
        filteredFilms = state.films.filter(
            (film) => film.genre === selectedGenre
        );
      }
      return extend(state, {filmsByGenre: filteredFilms});

    case ActionType.GET_MOVIES_FROM_SERVER:
      return extend(state, {films: action.payload});

    case ActionType.ADD_WATCH_LIST: {
      const filmsList = state.films.map((film) => {
        if (film.id === action.payload) {
          return extend(film, {isFavorite: true});
        }
        return film;
      });
      return extend(state, {films: filmsList});
    }

    case ActionType.REMOVE_WATCH_LIST: {
      const filmsList = state.films.map((film) => {
        if (film.id === action.payload) {
          return extend(film, {isFavorite: false});
        }
        return film;
      });

      return extend(state, {films: filmsList});
    }

    case ActionType.GET_COMMENTS_FROM_SERVER:
      return extend(state, {comments: action.payload});

    case ActionType.TOGGLE_IS_DATA_READY:
      return extend(state, {isDataReady: action.payload});

    case ActionType.POST_NEW_COMENT:
      return extend(state, {newComment: action.payload});

    case ActionType.IS_COMMENT_LOADING:
      return extend(state, {isCommentLoading: action.payload});

    case ActionType.IS_REVIEW_ERROR:
      return extend(state, {isReviewError: action.payload});

    case ActionType.IS_REVIEW_SENT:
      return extend(state, {isReviewSent: action.payload});

    case ActionType.GET_FILM_PROMO:
      return extend(state, {filmPromo: action.payload});

    case ActionType.SET_LOAD_FILMS_ERROR:
      return extend(state, {isLoadFilmsError: action.payload});

    case ActionType.SET_COMMENT_POST_ERROR:
      return extend(state, {isCommentPostError: action.payload});

    default:
      return state;
  }
};
