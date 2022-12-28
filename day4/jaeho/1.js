// 9.4 파생 변수를 질의 함수로 바꾸기 (책 9.3)
// 9.5 참조를 값으로 바꾸기 (책 9.4)

class Book {
  #title;
  #writer;
  #price;
  #discount;

  constructor(title, name, phoneNumber, price) {
    this.#title = title;
    this.#writer = new Writer(name, phoneNumber);
    this.#price = price;
    this.#discount = 0;
  }

  get title() {
    return this.#title;
  }

  get writerName() {
    return this.#writer.name;
  }

  set writerName(arg) {
    this.#writer.name = new Writer(arg, this.writerPhoneNumber);
  }

  get writerPhoneNumber() {
    return this.#writer.phoneNumber;
  }

  set writerPhoneNumber(arg) {
    this.#writer.phoneNumber = new Writer(this.writerName, arg);
  }

  set price(arg) {
    this.#price = arg;
  }

  set discount(arg) {
    this.#discount = arg;
  }

  get calculatedPrice() {
    return this.#price - this.#discount;
  }
}

class Writer {
  #name;
  #phoneNumber;

  constructor(name, phoneNumber) {
    this.#name = name;
    this.#phoneNumber = phoneNumber;
  }

  get name() {
    return this.#name;
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }
}
