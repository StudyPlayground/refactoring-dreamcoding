// 12.13 서브클래스를 위임으로 바꾸기

class Camera {
  #pixel;
  constructor(pixel) {
    this.#pixel = pixel;
  }
  takePicture() {
    return "찰칵";
  }
}

class Network {
  #speed;
  constructor(speed) {
    this.#speed = speed;
  }
}

class SmartPhone {
  #name;
  #features;
  constructor(name, features) {
    this.#name = name;
    this.#features = features;
  }

  static createSmartPhone(name, features) {
    return new SmartPhone(
      name,
      features.map((feature) => SmartPhone.getFeature(feature))
    );
  }
  static getFeature(feature) {
    switch (feature) {
      case "camera":
        return new Camera();
      case "network":
        return new Network();
    }
  }
}

const cameraNetworkPhone = SmartPhone.createSmartPhone("iphone14", [
  "camera",
  "network",
]);
const onlyNetworkPhone = SmartPhone.createSmartPhone("Galaxy Z flip3", [
  "network",
]);
const noFeaturePhone = SmartPhone.createSmartPhone("Galaxy Z flip3");
