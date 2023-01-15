class Book {
  #title;
  #writer;
  #price;
  #discount;

  constructor(title, writer, price) {
    this.#title = title;
    this.#writer = new Writer(writer.name, writer.phoneNumber);
    this.#price = price;
    this.#discount = 0;
  }

  get title() {
    return this.#title;
  }

  get writerName() {
    return this.#writer.name;
  }

  set writerName(value) {
    this.#writer = new Writer(value, this.#writer.phoneNumber);
  }

  get writerPhoneNumber() {
    return this.#writer.phoneNumber;
  }

  set writerPhoneNumber(value) {
    this.#writer = new Writer(this.#writer.name, value);
  }

  set price(value) {
    this.#price = value;
  }

  set discount(value) {
    this.#discount = value;
  }

  get discountedPrice() {
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
