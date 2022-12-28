// 함수 추출하기
// 변수, 함수 이름짓기

async function fetchReceipt() {
  return await receiptPromise;
}

function calculatedPrice({ price, quantity, discountPercent }) {
  return price * quantity * (1 - discountPercent);
}

function sumCalculatedPrice(receipt) {
  return receipt
    .map((product) => calculatedPrice(product))
    .reduce((sum, totalPrice) => sum + totalPrice, 0);
}

function printReceipt(receipt) {
  console.log("<영수증>");
  console.log("==========");
  receipt.forEach((product) => {
    console.log(`상품명: ${product.productName}`);
    console.log(`개당 가격: ${product.price}`);
    console.log(`갯수: ${product.quantity}`);
    console.log(`금액: ${calculatedPrice(product)}`);
    console.log("==========");
  });
}

async function run() {
  const receipt = JSON.parse(await fetchReceipt());
  printReceipt(receipt);
  console.log(`합계: ${sumCalculatedPrice(receipt)}`);
}

run();
