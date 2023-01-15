// 플래그 인수 제거하기
let seoulTrafficLight = "RED";
let jejuTrafficLight = "GREEN";

function message(light, optionMessage) {
  if (light === "RED") {
    console.log("🔴 -> 🟡 -> 🟢 " + optionMessage);

    return;
  }

  if (light === "GREEN") {
    console.log("🟢 -> 🟡 -> 🔴 " + optionMessage);

    return;
  }
}

function changeToGreenLight(redLight) {
  message(redLight, "출발하세요.");

  return "GREEN";
}

function changeToRedLight(greenLight) {
  message(greenLight, "속도를 줄이세요.");

  return "RED";
}

seoulTrafficLight = changeToGreenLight(seoulTrafficLight);
seoulTrafficLight = changeToRedLight(seoulTrafficLight);
seoulTrafficLight = changeToGreenLight(seoulTrafficLight);
jejuTrafficLight = changeToRedLight(jejuTrafficLight);
jejuTrafficLight = changeToGreenLight(jejuTrafficLight);
jejuTrafficLight = changeToRedLight(jejuTrafficLight);
