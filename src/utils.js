import {TextRates, RateLimits} from "./const.js";
import moment from "moment";


export const getDateFormat = (date) => {
  if (date) {
    return moment(date).format(`MMMM D, YYYY`);
  }
  return null;
};

export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const getUniqGenres = (films) => {

  const ALL_GENRE = `All genres`;

  const genresList = films
  .map((film)=>film.genre)
  .concat(ALL_GENRE)
  .reverse();

  return [...new Set(genresList)];
};

export const getTextRate = (rate) => {
  switch (true) {
    case rate >= RateLimits.NOTHING && rate < RateLimits.BAD:
      return TextRates.BAD;
    case rate >= RateLimits.BAD && rate < RateLimits.NORMAL:
      return TextRates.NORMAL;
    case rate >= RateLimits.NORMAL && rate < RateLimits.GOOD:
      return TextRates.GOOD;
    case rate >= RateLimits.GOOD && rate < RateLimits.VERY_GOOD:
      return TextRates.VERY_GOOD;
    case rate >= RateLimits.VERY_GOOD && rate < RateLimits.VERY_GOOD:
      return TextRates.AWESOME;
    default:
      return RateLimits.INCORRECT_RATE;
  }
};

const getFormatLessTen = (time) => {
  return time < 10 ? `0${time}` : `${time}`;
};

export const getTimeElapsed = (duration, currentTime) => {
  const timeDiff = duration - currentTime;
  const seconds = getFormatLessTen((timeDiff) % 60);
  const minutes = getFormatLessTen(Math.trunc(timeDiff / 60));
  const hours = getFormatLessTen(Math.trunc(minutes / 60));
  return `${hours}:${minutes}:${seconds}`;
};

export const getPosition = (currentTime, duration) => {
  if (duration === 0) {
    return 0;
  }
  return currentTime / duration * 100;
};
