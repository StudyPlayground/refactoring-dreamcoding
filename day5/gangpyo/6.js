function printBMI(name, kg, height) {
  console.log(`${name}님의 BMI는 ${(kg / (height * height)) * 10000}입니다`);
}

const person = {
  name: "Lily",
  kg: 50,
  height: 160,
};

printBMI(person.name, person.kg, person.height);
