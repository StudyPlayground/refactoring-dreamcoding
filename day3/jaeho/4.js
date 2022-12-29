class Item {
  #name;
  #type;
  constructor({ name, type }) {
    this.#name = name;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  get detail() {
    return { name: this.#name, type: this.#type };
  }
}

class Items {
  #items;
  constructor(items) {
    this.#items = items.map((item) => new Item(item));
  }

  filter(type) {
    return this.#items
      .filter((item) => item.type === type)
      .map((item) => item.detail);
  }

  static type = {
    top: "top",
    pants: "pants",
    shoes: "shoes",
  };
}

const items = [
  {
    name: "sweatshirt",
    type: "top",
  },
  {
    name: "knit",
    type: "top",
  },
  {
    name: "widePants",
    type: "pants",
  },
  {
    name: "slacks",
    type: "pants",
  },
  {
    name: "Converse",
    type: "shoes",
  },
];

const container = new Items(items);

const topItems = container.filter(Items.type.top);
const pantsItems = container.filter(Items.type.pants);
const shoesItems = container.filter(Items.type.shoes);

console.log("topItems :>> ", topItems);
console.log("pantsItems :>> ", pantsItems);
console.log("shoesItems :>> ", shoesItems);
