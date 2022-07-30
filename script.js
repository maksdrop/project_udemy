const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const key0 = prompt('Один из последних просмотренных фильмов?', ''),
      value0 = prompt('На сколько оцените его?', ''),
      key1 = prompt('Один из последних просмотренных фильмов?', ''),
      value1 = prompt('На сколько оцените его?', '');

personalMovieDB.count = numberOfFilms;
personalMovieDB.movies[key0] = value0;
personalMovieDB.movies[key1] = value1;
