// 객체 통째로 넘기기
function printBMI(person) {
  console.log(
    `${person.name}님의 BMI는 ${
      (person.kg / (person.height * person.height)) * 10000
    }입니다`
  );
}

const person = {
  name: "Lily",
  kg: 50,
  height: 160,
};

printBMI(person);
