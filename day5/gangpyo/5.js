// 팩토리 함수롤 변환하기
class Customer {
  #id;
  #name;
  #type;
  constructor(id, name, type) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
  }
  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get type() {
    return this.#type;
  }

  static get customerTypes() {
    return ["NORMAL", "VIP"];
  }

  static createVIP(id, name) {
    return new Customer(id, name, "VIP");
  }

  static createNomal(id, name) {
    return new Customer(id, name, "NORMAL");
  }
}

const c2 = Customer.createNomal(1, "Lily");
const c1 = Customer.createVIP(2, "Harry");

console.log(c1.id, c1.name, c1.type);
console.log(c2.id, c2.name, c2.type);
