class Products {
  #products;
  #discountRate;
  #shippingFeeRate;
  #discountCriteria;
  #shippingFeeCriteria;
  constructor(products) {
    this.#products = products;
    this.#discountRate = 0.1;
    this.#shippingFeeRate = 0.1;
    this.#discountCriteria = 30000;
    this.#shippingFeeCriteria = 100000;
  }

  get calculateTotalPrice() {
    const amountPrice = this.#amountPrice();
    const shippingFee = this.#shippingFee(amountPrice);
    return amountPrice - shippingFee;
  }

  #amountPrice() {
    return this.#products
      .map((product) =>
        this.#isOverPrice(product.price, this.#discountCriteria)
          ? product.price - product.price * this.#discountRate
          : product.price
      )
      .reduce((total, current) => total + current, 0);
  }

  #shippingFee(amountPrice) {
    return this.#isOverPrice(amountPrice, this.#shippingFeeCriteria)
      ? 0
      : amountPrice * this.#shippingFeeRate;
  }

  #isOverPrice(price, criteria) {
    return price >= criteria;
  }
}

const products = new Products([
  { name: "yellowPants", price: 20000 },
  { name: "bluePants", price: 30000 },
  { name: "redPants", price: 90000 },
]);

console.log(products.calculateTotalPrice);
