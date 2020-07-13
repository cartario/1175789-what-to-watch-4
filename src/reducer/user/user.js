export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  }
};

export const Operation = {

  checkAuth: () => (dispatch, getState, api) => {

    return api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api
    .post(`/login`,
        {
          email: authData.login,
          password: authData.password,
        }
    )
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});
    default:
      return state;
  }
};
