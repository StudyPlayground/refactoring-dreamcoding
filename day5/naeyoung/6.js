function printBMI(person){
  const { name, kg, height } = person;;
  console.log(`${name}님의 BMI는 ${kg / (height * height)*10000}입니다`);
}

const person = {
  name : 'Lily',
  kg : 50,
  height :  160
}

printBMI(person);
