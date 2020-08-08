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

  it(`should catch is comment loading`, () => {
    expect(reducer({
      isCommentLoading: false,
    }, {
      type: ActionType.IS_COMMENT_LOADING,
      payload: true,
    })).toEqual({
      isCommentLoading: true,
    });
  });

  it(`should catch is review error`, () => {
    expect(reducer({
      isReviewError: false,
    }, {
      type: ActionType.IS_REVIEW_ERROR,
      payload: true,
    })).toEqual({
      isReviewError: true,
    });
  });

  it(`should catch is review sent`, () => {
    expect(reducer({
      isReviewSent: false,
    }, {
      type: ActionType.IS_REVIEW_SENT,
      payload: true,
    })).toEqual({
      isReviewSent: true,
    });
  });

  it(`should catch is is Load Films Error`, () => {
    expect(reducer({
      isLoadFilmsError: false,
    }, {
      type: ActionType.SET_LOAD_FILMS_ERROR,
      payload: true,
    })).toEqual({
      isLoadFilmsError: true,
    });
  });

  it(`should catch is is Load Films Error`, () => {
    expect(reducer({
      isCommentPostError: false,
    }, {
      type: ActionType.SET_COMMENT_POST_ERROR,
      payload: true,
    })).toEqual({
      isCommentPostError: true,
    });
  });
});
