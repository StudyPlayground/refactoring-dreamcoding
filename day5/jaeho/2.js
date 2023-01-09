// 11.4 플래그 인수 제거하기

class TrafficLight {
  #status;

  constructor(light) {
    this.#status = light === "RED" ? false : true;
  }

  #messageRedToGreen() {
    console.log("🔴 -> 🟡 -> 🟢 출발하세요.");
  }

  #messageGreenToRed() {
    console.log("🟢 -> 🟡 -> 🔴 속도를 줄이세요.");
  }

  changeLight() {
    this.#status ? this.#messageGreenToRed() : this.#messageRedToGreen();
    this.#status = !this.#status;
  }
}

const seoulTrafficLight = new TrafficLight("RED");
const jejuTrafficLight = new TrafficLight("GREEN");

seoulTrafficLight.changeLight();
seoulTrafficLight.changeLight();
seoulTrafficLight.changeLight();
jejuTrafficLight.changeLight();
jejuTrafficLight.changeLight();
jejuTrafficLight.changeLight();
