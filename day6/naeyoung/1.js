class Dog {
  speak() {
    console.log('Bark !!');
  }
  static create(type) {
    switch (type) {
      case 'Pomeranian':
        return new Pomeranian();
      case 'WelshCorgi':
        return new WelshCorgi();
      default:
        return new Dog();
    }
  }
}

class Pomeranian extends Dog {
  speak() {
    console.log('Pome ~!');
  }
}

class WelshCorgi extends Dog {
  speak() {
    console.log('Corgi ~~');
  }
}

const pome = Dog.create('Pomeranian');
const corgi = Dog.create('WelshCorgi');
const dog = Dog.create();

pome.speak();
corgi.speak();
dog.speak();
