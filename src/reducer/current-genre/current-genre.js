import {extend} from "../../utils.js";

export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
};

const ALL_GENRE = `All genres`;

const initialState = {
  currentGenre: ALL_GENRE,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:

      return extend(state, {currentGenre: action.payload});
    default:
      return state;
  }
};

