// 기본형을 객체로 바꾸기

class Phone {
  #phoneNumber;
  constructor(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }

  printNumber() {
    console.log(`phone : ${this.#phoneNumber}`);
  }

  isKoreaNumber() {
    return this.#phoneNumber.slice(0, 3) === "010";
  }
}

const phone = new Phone("01012345678");
console.log(phone.phoneNumber);
phone.printNumber();
console.log(phone.isKoreaNumber());
