class User {
  #name;
  #consumption;
  #point;

  constructor(user) {
    this.#name = user.name;
    this.#consumption = user.consumption;
    this.#point = user.point;
  }

  get rank() {
    if (this.#consumption < User.consumpotionCriteria) {
      return "C";
    }

    if (this.#point <= User.pointCriteria) {
      return "B";
    }

    return "A";
  }

  static consumpotionCriteria = 1000;
  static pointCriteria = 200;
}

const user1 = new User({ name: "user1", consumption: 10000, point: 500 });
const user2 = new User({ name: "user2", consumption: 100, point: 10 });
const user3 = new User({ name: "user3", consumption: 1500, point: 100 });

console.log(user1.rank);
console.log(user2.rank);
console.log(user3.rank);
