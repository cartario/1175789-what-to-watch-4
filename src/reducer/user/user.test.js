import {reducer} from "./user.js";

describe(`test-reducer-user`, () => {
  it(`should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: `NO_AUTH`,
      authStatusErr: false,
    });
  });
});
