import axios from "axios";
import {Redirect} from "react-router-dom";
import {AppRoute} from "./const.js";
import {history} from "./history.js";

const Error = {
  UNAUTHORIZED: 401,
};

export const createApi = (onUnauthorized)=> {

  const api = axios.create({
    baseURL: `https://4.react.pages.academy/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    history.push(AppRoute.ROOT);
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      history.push(AppRoute.LOGIN);
      return (<Redirect to = {AppRoute.LOGIN}/>);
      // throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
