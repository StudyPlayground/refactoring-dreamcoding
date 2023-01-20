// 객체 통째로 넘기기
class Person {
  #name;
  #kg;
  #height;
  constructor(person) {
    this.#name = person.name;
    this.#kg = person.kg;
    this.#height = person.height;
  }

  get name() {
    return this.#name;
  }

  get BMI() {
    return (this.#kg / (this.#height * this.#height)) * 10000;
  }
}

function printBMI(person) {
  console.log(`${person.name}님의 BMI는 ${person.BMI}입니다`);
}

const person = {
  name: "Lily",
  kg: 50,
  height: 160,
};

const Lily = new Person(person);
printBMI(Lily);
