import {TextRates} from "./const.js";

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
  if (rate <= 3) {
    return TextRates.BAD;
  } else if (rate <= 5) {
    return TextRates.NORMAL;
  } else if (rate <= 8) {
    return TextRates.GOOD;
  } else if (rate <= 10) {
    return TextRates.VERY_GOOD;
  }
  return TextRates.AWESOME;
};
