const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const QUESTIONS_COUNT = 2;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.count = numberOfFilms;

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

for (let i = 0; i < QUESTIONS_COUNT; i++) {
  const key = prompt('Один из последних просмотренных фильмов?', ''),
        value = prompt('На сколько оцените его?', '');

  if (key == null || value == null || key == '' || value == '' || key.length > 50) {
    console.log('error');
    i--;
  } else {
    console.log('done');
    personalMovieDB.movies[key] = value;
  }

  //! 2 пример
  // if ((key != null && value != null && key != '' && value != '' && key.length < 50)) {
  //   console.log('done');
  //   personalMovieDB.movies[key] = value;
  // } else {
  //   console.log('error');
  //   i--;
  // }
}

console.log(personalMovieDB);
