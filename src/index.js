import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const MovieInfo = {
  TITLE: `The grand Budapest`,
  GENRE: `Drama`,
  YEAR: 2014,

};

const onMovieButtonClick = () => {};

ReactDOM.render(
    <Provider store={store}>

      <App movieInfo = {MovieInfo}
        onMovieButtonClick = {onMovieButtonClick}

      />
    </Provider>,
    document.querySelector(`#root`)
);

window.q = store;
