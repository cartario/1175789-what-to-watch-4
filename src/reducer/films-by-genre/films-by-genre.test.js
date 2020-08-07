import {reducer, ActionType} from "./films-by-genre.js";

const films = [];

describe(`test-reducer-films-by-genre`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
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
    });
  });

  it(`should update films`, () => {
    expect(reducer({
      films: [],
    }, {
      type: ActionType.GET_MOVIES_FROM_SERVER,
      payload: films
    })).toEqual({
      films,
    });
  });


  it(`should update postComment`, () => {
    expect(reducer({
      newComment: {},
    }, {
      type: ActionType.POST_NEW_COMENT,
      payload: {},
    })).toEqual({
      newComment: {},
    });
  });

  it(`should set isReviewError`, () => {
    expect(reducer({
      isReviewError: true,
    }, {
      type: ActionType.IS_REVIEW_ERROR,
      payload: {},
    })).toEqual({
      isReviewError: {},
    });
  });
});
