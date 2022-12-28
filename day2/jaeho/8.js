// 문제점 : range의 min과 max를 인수로 넘겨주는 곳에서 매직 넘버를 사용하는 것.
class Range {
  #min;
  #max;

  constructor({ min, max }) {
    this.#min = min;
    this.#max = max;
  }

  set min(number) {
    this.#min = number;
  }

  set max(number) {
    this.#max = number;
  }

  isInRange(number) {
    return this.#min <= number && number <= this.#max;
  }
}

class Product {
  #name;
  #price;

  constructor({ name, price }) {
    this.#name = name;
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  get detail() {
    return { name: this.#name, price: this.#price };
  }
}

class Products {
  #products;
  #range;
  constructor(products, range) {
    this.#products = products.map((product) => new Product(product));
    this.#range = new Range(range);
  }

  set min(number) {
    this.#range.min = number;
  }

  set max(number) {
    this.#range.max = number;
  }

  get outsideRangeProducts() {
    return this.#products
      .filter((product) => !this.#range.isInRange(product.price))
      .map((product) => product.detail);
  }
}

const range = {
  min: 3000,
  max: 7000,
};

const products = new Products(
  [
    { name: "A", price: 10000 },
    { name: "B", price: 5000 },
    { name: "C", price: 2000 },
    { name: "D", price: 7000 },
  ],
  range
);

console.log(products.outsideRangeProducts);
products.min = 6000;
products.outsideRangeProducts[0].price = 9999999999;
console.log(products.outsideRangeProducts);
