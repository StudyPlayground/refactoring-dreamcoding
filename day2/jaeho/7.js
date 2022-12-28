// 문제점 : 불필요하게 함수를 나누었고, isMoreThanThreeStars함수는 다양하게 재사용되기 어렵게 만들어져있습니다.
class Movie {
  #name;
  #star;
  constructor({ name, star }) {
    this.#name = name;
    this.#star = star;
  }

  get rating() {
    return this.#isGoodMovie ? "good movie" : "bad movie";
  }

  get #isGoodMovie() {
    return this.#star > Movie.starCriteria;
  }

  static starCriteria = 3;
}

const movieA = new Movie({
  name: "movieA",
  star: 4,
});

console.log(movieA.rating);
