function getMovieRating(movie) {
  return movie.star > 3 ? 'good movie' : 'bad movie';
}

const movieA = {
  name: 'movieA',
  star: 4,
};

console.log(getMovieRating(movieA));
