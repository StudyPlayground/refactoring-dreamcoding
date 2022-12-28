function getMovieRating(movie) {
  return movie.star > 3 ? "good movie" : "bad movie"; // 함수 인라인
}

const movieA = {
  name: "movieA",
  star: 4,
};

console.log(getMovieRating(movieA));
