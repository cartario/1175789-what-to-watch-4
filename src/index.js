import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducers} from "./reducer/reducer.js";
import thunkMiddleware from "redux-thunk";
import {Operation} from "./reducer/films-by-genre/films-by-genre.js";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {createApi} from "./api.js";


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createApi(onUnauthorized);

const store = createStore(
    reducers, compose(
        applyMiddleware(thunkMiddleware.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )

);

store.dispatch(Operation.loadFilms());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(

    <Provider store={store} >
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
