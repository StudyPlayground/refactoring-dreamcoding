// 슈퍼 클래스 추출하기
class Pet {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  eat() {
    console.log("eating... ");
  }
}

class Dog extends Pet {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("Bark!");
  }
}

class Cat extends Pet {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log("Meow!");
  }
}
