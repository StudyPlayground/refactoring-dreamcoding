class Study {
  #name;
  #count;
  #type;
  constructor(name, count, type) {
    this.#name = name;
    this.#count = count;
    this.#type = type;
  }

  get name() {
    return this.#name;
  }

  get count() {
    return this.#count;
  }

  get type() {
    return this.#type;
  }

  set count(count) {
    this.#count = count;
  }

  get state() {}

  toString() {
    return `${this.#name} is ${this.recruitingState} (${this.#count})`;
  }
  get recruitingState() {
    if (10 < this.#count) {
      return 'Full';
    } else if (5 < this.#count) {
      return 'Almost Full';
    } else {
      return 'Hiring';
    }
  }

  createBookStudy(name, count) {
    return new Study(name, count, 'Book');
  }
  createCSStudy(name, count) {
    return new Study(name, count, 'CS');
  }
  createAlgorithmStudy(name, count) {
    return new Study(name, count, 'Algorithm');
  }
}

function compareByCount(study1, study2) {
  return study1.count - study2.count;
}

const studys = [
  new Study('typeScript_study', 5, 'Book'),
  new Study('network_study', 10, 'CS'),
  new Study('javascript_deep_diver', 1, 'Book'),
  new Study('coding_test', 3, 'Algorithm'),
  new Study('refactoring_study', 12, 'Book'),
  new Study('Reading_Book', 6, 'Book'),
  new Study('Database_study', 9, 'CS'),
];

console.log('<정렬 전>');
studys.forEach((study) => console.log(study.toString()));

console.log('<정렬 기준: count>');
studys.sort(compareByCount).forEach((study) => console.log(study.toString()));
