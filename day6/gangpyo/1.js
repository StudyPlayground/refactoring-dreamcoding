// 위임을 상속으로 변경하기

class Dog {
  speak() {
    console.log("Bark !!");
  }
}
class Pomeranian extends Dog {
  speak() {
    console.log("Pome ~!");
  }
}

class WelshCorgi extends Dog {
  speak() {
    console.log("Corgi ~~");
  }
}

const pome = new Pomeranian();
const corgi = new WelshCorgi();
const dog = new Dog();

pome.speak();
corgi.speak();
dog.speak();
