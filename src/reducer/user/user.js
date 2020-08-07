export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authStatusErr: false,
};

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ERROR_AUTHORIZATION: `ERROR_AUTHORIZATION`,
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  },

  errorAuthorization: (error) => {
    return ({
      type: ActionType.ERROR_AUTHORIZATION,
      payload: error,
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
    })
    .catch((err)=> {
      dispatch(ActionCreator.errorAuthorization(true));
      throw err;
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {authorizationStatus: action.payload});

    case ActionType.ERROR_AUTHORIZATION:
      return Object.assign({}, state, {authStatusErr: action.payload});
    default:
      return state;
  }
};
