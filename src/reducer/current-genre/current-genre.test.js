import {ActionType, reducer} from "./current-genre.js";

describe(`test-reducer-currentGenre`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentGenre: `All genres`,
    });
  });

  it(`should render after change filter`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: ActionType.CHANGE_FILTER,
      payload: `Dramas`,
    })).toEqual({
      currentGenre: `Dramas`,
    });
  });
});
