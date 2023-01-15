class Book {
  #title;
  #writer;
  #price;
  #discount;

  constructor(title, price, writer) {
    this.#title = title;
    this.#price = price;
    this.#discount = 0;
    this.#writer = writer;
  }

  get title() {
    return this.#title;
  }

  get writerName() {
    return this.#writer.name;
  }

  set writerName(name) {
    this.#writer.name = name;
  }

  get writerPhoneNumber() {
    return this.#writer.phoneNumber;
  }

  set writerPhoneNumber(phoneNumber) {
    this.#writer.phoneNumber = phoneNumber;
  }

  set price(price) {
    this.#price = price;
  }

  get calculatedPrice() {
    return this.#price - this.#discount;
  }

  set discount(discount) {
    this.#discount = discount;
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

  set name(arg) {
    this.#name = arg;
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }

  set phoneNumber(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }
}

const writer = new Writer('J.K.Rowling', '01012345678');
const book1 = new Book('HarryPotter1', 10000, writer);
const book2 = new Book('HarryPotter2', 11000, writer);

book2.discount = 1500;

console.log(
  book1.title,
  book1.writerName,
  book1.writerPhoneNumber,
  book1.calculatedPrice
);

console.log(
  book2.title,
  book2.writerName,
  book2.writerPhoneNumber,
  book2.calculatedPrice
);
