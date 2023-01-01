class PhoneNumber {
  #phoneNumber;
  #areaCode;
  constructor(areaCode, phoneNumber) {
    this.#areaCode = areaCode;
    this.#phoneNumber = phoneNumber;
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }

  printPhoneNumber() {
    console.log(`phone : ${this.#areaCode}${this.#phoneNumber}`);
  }

  get isKoreaNumber() {
    return this.#areaCode === "010";
  }
}

const phoneNumber = new PhoneNumber("010", "12345678");

console.log(phoneNumber);
phoneNumber.printPhoneNumber();
console.log(phoneNumber.isKoreaNumber);
