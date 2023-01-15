// 매개변수를 질의 함수로 바꾸기
class Study {
  constructor(name, count, type) {
    this._name = name;
    this._count = count;
    this._type = type;
  }

  get count() {
    return this._count;
  }

  set count(arg) {
    this._count = arg;
  }

  get type() {
    return this._type;
  }

  get recruitingState() {
    if (10 < this._count) {
      return "Full";
    }

    if (5 < this._count) {
      return "Almost Full";
    }

    return "Hiring";
  }

  toString() {
    return `${this._name} is ${this._recruitingState} (${this._count})`;
  }
}

function compareByCount(study1, study2) {
  return study1.count - study2.count;
}

const studys = [
  new Study("typeScript_study", 5, "Book"),
  new Study("network_study", 10, "CS"),
  new Study("javascript_deep_diver", 1, "Book"),
  new Study("coding_test", 3, "Algorithm"),
  new Study("refactoring_study", 12, "Book"),
  new Study("Reading_Book", 6, "Book"),
  new Study("Database_study", 9, "CS"),
];

console.log("<정렬 전>");
studys.forEach((study) => console.log(study.toString()));

console.log("<정렬 기준: count>");
studys.sort(compareByCount).forEach((study) => console.log(study.toString()));
