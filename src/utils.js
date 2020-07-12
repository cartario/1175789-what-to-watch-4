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
