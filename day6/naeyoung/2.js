class Camera {
  #pixel;
  constructor(pixel) {
    this.#pixel = pixel;
  }
  takePicture() {
    return '찰칵';
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
  #optionList;
  constructor(name, optionList) {
    this.#name = name;
    this.#optionList = optionList;
  }
  static createSmartPhone(name, optionList) {
    return new SmartPhone(
      name,
      optionList.map(({ name, params }) => SmartPhone.getOption(name, params))
    );
  }

  static getOption(optionName, optionParams) {
    switch (optionName) {
      case 'camera':
        return new Camera(...optionParams);
      case 'network':
        return new Network(...optionParams);
      default:
        throw new Error('지원되지 않는 기능입니다');
    }
  }
}
const cameraPhone = SmartPhone.createSmartPhone('cPhone', [
  { name: 'camera', params: [64] },
]);
const networkPhone = SmartPhone.createSmartPhone('nPhone', [
  { name: 'network', params: [100] },
]);
const cameraNetworkPhone = SmartPhone.createSmartPhone('cnPhone', [
  { name: 'camera', params: [32] },
  { name: 'network', params: [500] },
]);
