// 서브클래스 위임으로 바꾸기
class SmartPhone {
  #name;
  #camera;
  #network;
  constructor({ name, camera, network }) {
    this.#name = name;
    this.#camera = camera ?? new DefaultCamera();
    this.#network = network ?? new DefaultNetwork();
  }

  takePicture() {
    return this.#camera.takePicture();
  }
}

class Camera {
  #pixel;
  constructor(pixel) {
    this.#pixel = pixel;
  }

  takePicture() {
    return "찰칵";
  }
}

class DefaultCamera {
  takePicture() {
    return "카메라 기능이 없습니다.";
  }
}

class Network {
  #speed;
  constructor(speed) {
    this.#speed = speed;
  }
}

class DefaultNetwork {}

const iphone11 = new SmartPhone({ name: "iphone11" });

const iphone12 = new SmartPhone({ name: "iphone12", camera: new Camera(123) });

const iphone13 = new SmartPhone({
  name: "iphone13",
  network: new Network(1000),
});

const iphone14 = new SmartPhone({
  name: "iphone14",
  camera: new Camera(123),
  network: new Network(1000),
});
