class Animal {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark!");
  }

  eat() {
    console.log("eating ... ");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }

  eat() {
    console.log("eating... ");
  }
}
