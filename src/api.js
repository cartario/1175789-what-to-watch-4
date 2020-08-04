import axios from "axios";
import {AppRoutes} from "./const.js";
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
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      history.push(AppRoutes.LOGIN);

      throw err;
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};
