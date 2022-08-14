const QUESTIONS_COUNT = 2;
let numberOfFilms;

const start = () => {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const detectPersonalLevel = () => {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

const rememberMyFilms = () => {
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
}

rememberMyFilms();

const showMyDb = (hidden) => {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

const writeYourGenres = () => {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
  }
}

writeYourGenres();
