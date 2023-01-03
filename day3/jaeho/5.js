class PhoneNumber {
  #phoneNumber;
  constructor(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }

  get isKoreaPhoneNumber() {
    return this.#phoneNumber.slice(0, 3) === "010";
  }

  get detail() {
    return `phone : ${phoneNumber}`;
  }
}

const userPhoneNumber = "01012345678";

const phoneNumber = new PhoneNumber(userPhoneNumber);
console.log(phoneNumber.detail);
console.log(phoneNumber.isKoreaPhoneNumber);
