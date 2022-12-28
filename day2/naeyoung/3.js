class Product {
  #name;
  #price;
  constructor(name, price) {
    this.#name = name;
    this.#price = price;
  }

  get name() {
    return this.#name;
  }

  get price() {
    const DISCOUNT_PRICE = 30000;
    const DISCOUNT_RATE = 0.1;
    if (this.#price >= DISCOUNT_PRICE) {
      return this.#price - this.#price * DISCOUNT_RATE;
    }
    return this.#price;
  }

  get originalPrice() {
    return this.#price;
  }
}

function calculatePrice(products) {
  const FREE_SHIPPING_PRICE = 100000;
  const SHIPPING_RATE = 0.1;
  const totalPrice = products.reduce((acc, cur) => acc + cur.price, 0);
  const shippingFee =
    totalPrice < FREE_SHIPPING_PRICE ? totalPrice * SHIPPING_RATE : 0;

  return totalPrice + shippingFee;
}

const products = [
  new Product('yellowPants', 20000),
  new Product('bluePants', 30000),
  new Product('redPants', 90000),
];

console.log(calculatePrice(products));
