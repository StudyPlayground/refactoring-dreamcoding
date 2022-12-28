// 9.4 파생 변수를 질의 함수로 바꾸기
// 11.9 생성자를 팩터리 함수로 바꾸기

class Study {
  #name;
  #count;
  #type;
  constructor(name, count, type) {
    this.#name = name;
    this.#count = count;
    this.#type = type;
  }

  get count() {
    return this.#count;
  }

  get type() {
    return this.#type;
  }

  set count(arg) {
    this.#count = arg;
  }

  toString() {
    return `${this.#name} is ${this.#recruitingState()} (${this.#count})`;
  }

  #recruitingState() {
    if (10 < this.#count) {
      return "Full";
    } else if (5 < this.#count) {
      return "Almost Full";
    } else {
      return "Hiring";
    }
  }

  static createAlgorithm(name, count) {
    return new Study(name, count, "Algorithm");
  }

  static createComputerScience(name, count) {
    return new Study(name, count, "CS");
  }

  static createBook(name, count) {
    return new Study(name, count, "Book");
  }

  static compareByCount(study1, study2) {
    return study1.count - study2.count;
  }
}

const studys = [
  Study.createBook("typeScript_study", 5),
  Study.createComputerScience("network_study", 10),
  Study.createBook("javascript_deep_diver", 1),
  Study.createAlgorithm("coding_test", 3),
  Study.createBook("refactoring_study", 12),
  Study.createBook("Reading_Book", 6),
  Study.createComputerScience("Database_study", 9),
];

console.log("<정렬 전>");
studys.forEach((study) => console.log(study.toString()));

console.log("<정렬 기준: count>");
studys
  .sort(Study.compareByCount)
  .forEach((study) => console.log(study.toString()));
