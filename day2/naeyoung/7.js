// 문제점: 불필요한 함수를 만들어 더 직관적이지 않은 코드를 만들었다.

function getMovieRating(movie) {
  return movie.star > 3 ? "good movie" : "bad movie";
}

const movieA = {
  name: "movieA",
  star: 4,
};

console.log(getMovieRating(movieA));
