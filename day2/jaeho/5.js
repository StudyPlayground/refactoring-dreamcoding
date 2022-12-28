class Item {
  #id;
  #type;
  #name;
  constructor({ id, type, name }) {
    this.#id = id;
    this.#type = type;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return this.#type;
  }

  get name() {
    return this.#name;
  }

  get detail() {
    return { id: this.#id, type: this.#type, name: this.#name };
  }
}

class Items {
  #items;
  constructor(items) {
    this.#items = items.map((item) => new Item(item));
  }

  get refundItems() {
    return Items.filterItems(this.#items, Items.type.refund);
  }

  get creditItems() {
    return Items.filterItems(this.#items, Items.type.credit);
  }

  get exchangeItems() {
    return Items.filterItems(this.#items, Items.type.credit);
  }

  static type = {
    refund: "refund",
    credit: "credit",
    exchange: "exchange",
  };

  static filterItems(items, filterType) {
    return items
      .filter((item) => item.type === filterType)
      .map((item) => item.detail);
  }
}

const items = new Items([
  {
    id: 1,
    type: "refund",
    name: "티셔츠",
  },

  {
    id: 2,
    type: "exchange",
    name: "청바지",
  },
  {
    id: 3,
    type: "refund",
    name: "티셔츠1",
  },
  {
    id: 4,
    type: "credit",
    name: "신발",
  },
]);

console.log("refundItems :>> ", items.refundItems);
console.log("creditItems :>> ", items.creditItems);
console.log("exchageItems :>> ", items.exchangeItems);
