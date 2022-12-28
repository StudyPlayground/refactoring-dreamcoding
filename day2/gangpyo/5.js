const items = [
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
];

class Order {
  #items;
  constructor(items) {
    this.#items = items;
  }

  get refundItems() {
    return this.#items.filter((item) => item.type === "refund");
  }

  get creditItems() {
    return this.#items.filter((item) => item.type === "credit");
  }

  get exchangeItems() {
    return this.#items.filter((item) => item.type === "exchange");
  }
}

const order = new Order(items);

console.log("refundItems :>> ", order.refundItems);
console.log("creditItems :>> ", order.creditItems);
console.log("exchageItems :>> ", order.exchangeItems);
