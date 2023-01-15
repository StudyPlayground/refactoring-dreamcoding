class TrafficLight {
  #light;
  constructor(light) {
    this.#light = light;
  }

  #printRedToGreenMessage() {
    console.log('🔴 -> 🟡 -> 🟢 ' + '속도를 줄이세요');
  }

  #printGreenToRedMessage() {
    console.log('🔴 -> 🟡 -> 🟢 ' + '출발하세요');
  }

  changeLight() {
    if (this.#light === 'RED') {
      this.#printRedToGreenMessage();
      this.#light = 'GREEN';
    } else {
      this.#printGreenToRedMessage();
      this.#light = 'RED';
    }
  }
}

const seoulTrafficLight = new TrafficLight('RED');
const jejuTrafficLight = new TrafficLight('GREEN');

seoulTrafficLight.changeLight();
seoulTrafficLight.changeLight();
seoulTrafficLight.changeLight();
jejuTrafficLight.changeLight();
jejuTrafficLight.changeLight();
jejuTrafficLight.changeLight();
