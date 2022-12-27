class Range {
  #min;
  #max;

  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  contains(value) {
    return value >= this.#min && value <= this.#max;
  }
}

function getOutsideRangePrice(products, range) {
  // 매개변수 축소
  return products.filter((p) => !range.contains(p.price)); // 함수 추출
}

const products = [
  { name: "A", price: 10000 },
  { name: "B", price: 5000 },
  { name: "C", price: 2000 },
  { name: "D", price: 7000 },
];

const operatorPlan = new Range(3000, 7000);
console.log(getOutsideRangePrice(products, operatorPlan));
