import {TextRates} from "./const.js";
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
    case rate >= 0 && rate < 3:
      return TextRates.BAD;
    case rate >= 3 && rate < 5:
      return TextRates.NORMAL;
    case rate >= 5 && rate < 8:
      return TextRates.GOOD;
    case rate >= 8 && rate < 10:
      return TextRates.VERY_GOOD;
    case rate >= 10 && rate < 12:
      return TextRates.AWESOME;
    default:
      return `incorrect_rate`;
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
