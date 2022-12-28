// 컬렉션 캡슐화하기
// 임시 변수를 질의 함수로 바꾸기

class Odd {
  #odds;
  constructor() {
    this.#odds = [];
  }

  #isOdd(number) {
    return number % 2 === 0 ? false : true;
  }

  add(number) {
    this.#isOdd(number) && this.#odds.push(number);
  }

  print() {
    this.#odds.forEach((odd, index) => console.log(`[${index + 1}] ${odd}`));
  }
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = new Odd();

numbers.forEach((number) => odds.add(number));

odds.print();
