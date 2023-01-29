// 위임으로 바꾸기..?
class Pomeranian {
  speak() {
    console.log("Pome ~!");
  }
}

class WelshCorgi {
  speak() {
    console.log("Corgi ~~");
  }
}

class Dog {
  #type;

  constructor(type = null) {
    this.#type = type;
  }

  speak() {
    if (this.#type === null) {
      console.log("Bark !!");

      return;
    }
    this.#type.speak();
  }
}

const pome = new Dog(new Pomeranian());
const corgi = new Dog(new WelshCorgi());
const dog = new Dog();

pome.speak();
corgi.speak();
dog.speak();
