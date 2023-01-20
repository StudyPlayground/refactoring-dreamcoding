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

  static createNormal(...args) {
    return new Customer(...args, "NORMAL");
  }

  static createVIP(...args) {
    return new Customer(...args, "VIP");
  }
}

const Lily = Customer.createNormal(1, "Lily");
const Harry = Customer.createVIP(2, "Harry");

console.log(Lily.id, Lily.name, Lily.type);
console.log(Harry.id, Harry.name, Harry.type);
