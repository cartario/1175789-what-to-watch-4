import {reducers} from "./reducer";

test(`Reducer without additional parameters should return initial state`, ()=> {
  expect(reducers(void 0, {})).toEqual({
    CURRENT_GENRE: {
      currentGenre: `All genres`,
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      authStatusErr: false,
    },

    FILMS: {
      films: [],
      filmPromo: {},
      filmsByGenre: [],
      comments: [],
      isCommentLoading: false,
      isDataReady: false,
      isReviewError: false,
      isReviewSent: false,
      newComment: {},
    }
  });
});
