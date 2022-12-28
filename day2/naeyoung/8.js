// 문제점: range 부분의 값과 관련 로직이 분리되어 있어 응집도가 떨어진다.

class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }
  get min() {
    return this.#min;
  }
  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const products = [
  { name: "A", price: 10000 },
  { name: "B", price: 5000 },
  { name: "C", price: 2000 },
  { name: "D", price: 7000 },
];

function getOutsideRangePrice(products, range) {
  return products.filter((p) => !range.contains(p.price));
}

console.log(getOutsideRangePrice(products, new NumberRange(3000, 7000)));
