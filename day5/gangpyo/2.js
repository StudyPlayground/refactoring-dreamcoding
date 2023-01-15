// 플래그 인수 제거하기
let seoulTrafficLight = "RED";
let jejuTrafficLight = "GREEN";

function printTransitionToGreen(optionMessage) {
  console.log("🔴 -> 🟡 -> 🟢 " + optionMessage);
}

function printTransitionToRed(optionMessage) {
  console.log("🟢 -> 🟡 -> 🔴 " + optionMessage);
}

function changeToGreenLight(message) {
  printTransitionToGreen(message);

  return "GREEN";
}

function changeToRedLight(message) {
  printTransitionToRed(message);

  return "RED";
}

seoulTrafficLight = changeToGreenLight("출발하세요");
seoulTrafficLight = changeToRedLight("속도를 줄이세요.");
seoulTrafficLight = changeToGreenLight("출발하세요");
jejuTrafficLight = changeToRedLight("속도를 줄이세요.");
jejuTrafficLight = changeToGreenLight("출발하세요");
jejuTrafficLight = changeToRedLight("속도를 줄이세요.");
