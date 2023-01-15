class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  speak() {
    console.log('!');
  }

  eat() {
    console.log('eating ... ');
  }

  get name() {
    return this.#name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log('Bark!');
  }
}

class Cat {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log('Meow!');
  }
}
