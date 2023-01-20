class Person {
  #name;
  #weight;
  #height;

  constructor({ name, weight, height }) {
    this.#name = name;
    this.#weight = weight;
    this.#height = height;
  }

  get #calculateBMI() {
    return (this.#weight / (this.#height * this.#height)) * 10000;
  }

  get BMIMessage() {
    return `${this.#name}님의 BMI는 ${this.#calculateBMI}입니다`;
  }
}

const person = new Person({
  name: "Lily",
  weight: 50,
  height: 160,
});

console.log(person.BMIMessage);
