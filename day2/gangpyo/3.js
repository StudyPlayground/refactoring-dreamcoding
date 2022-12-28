import _ from "lodash";

// 단계쪼개기
const products = [
  { name: "yellowPants", price: 20000 },
  { name: "bluePants", price: 30000 },
  { name: "redPants", price: 90000 },
];

const discountRate = 0.1;

function calculatePrice(products, discountRate) {
  const _products = _.cloneDeep(products); // 1.참조형 데이터 직접변경 방지

  const discountedProducts = DisCountProducts(_products, discountRate); // 2. 할인 로직 함수로 추출
  const amount = calculateAmount(discountedProducts); // 3. 총합계 로직 함수로 추출
  const shippingFee = calculateShippingFee(amount); // 4. 배송비 로직 함수로 추출

  return amount - shippingFee; // 5.변수 인라인
}

function DisCountProducts(products, discountRate) {
  return products.map((product) => {
    // 배열 내장함수 사용
    return product.price >= 30000
      ? { ...product, price: caculateDiscount(product.price, discountRate) }
      : product;
  });

  function caculateDiscount(price, discountRate) {
    return price - price * discountRate;
  }
}

function calculateAmount(products) {
  // 배열 내장함수 사용
  return products.reduce((amount, product) => amount + product.price, 0);
}

function calculateShippingFee(amount) {
  // 배열 내장함수 사용
  return amount >= 100000 ? 0 : amount * 0.1;
}

console.log(calculatePrice(products, discountRate));
