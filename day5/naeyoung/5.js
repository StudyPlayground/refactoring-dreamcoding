class Customer {
  #id;
  #name;
  #type;
  constructor(id, name, type) {
    this.#id = id;
    this.#name = name;
    this.#type = type;
  }

  createNormalCustomer(id, name) {
    return new Customer(id, name, 'NORMAL');
  }

  createVIPCustomer(id, name) {
    return new Customer(id, name, 'VIP');
  }

  get id() {
    return this.#id;
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

  setTypeToVIP() {
    this.#type = 'VIP';
  }

  setTypeToNormal() {
    this.#type = 'NORMAL';
  }

  static get customerTypes() {
    return ['NORMAL', 'VIP'];
  }
}

