//클래스를 필드로 변경하기..?
class Dog {
  #type;
  #barkSound;
  constructor(type, barkSound) {
    this.#type = type;
    this.#barkSound = barkSound;
  }

  speak() {
    console.log(this.#barkSound);
  }

  static create(type) {
    switch (type) {
      case "Pomeranian":
        return new Dog("Pomeranian", "Pome ~!");
      case "WelshCorgi":
        return new Dog("WelshCorgi", "Corgi ~~");
      default:
        return new Dog("unknownType", "Bark !!");
    }
  }
}

const pome = Dog.create("Pomeranian");
const corgi = Dog.create("WelshCorgi");
const dog = Dog.create();

pome.speak();
corgi.speak();
dog.speak();
