const numbersOfFilms = +prompt("How many movies have you already watched?", "");

const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of the last watched movie?", "");
const b = prompt("How would you rate it?", "");
const c = prompt("One of the last watched movie?", "");
const d = prompt("How would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);