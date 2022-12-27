const receiptPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(
      JSON.stringify([
        {
          productName: "삼다수",
          quantity: 20,
          price: 500,
          discountPercent: 0.12,
        },
        {
          productName: "쫄병 스낵",
          quantity: 2,
          price: 1000,
          discountPercent: 0.08,
        },
        {
          productName: "마스크",
          quantity: 100,
          price: 300,
          discountPercent: 0.5,
        },
      ])
    );
  }, 2000);
});

receiptPromise.then((rawData) => {
  const receipt = JSON.parse(rawData);
  printReceipt(receipt); // 함수 단계 쪼개기
});

function printReceipt(receipt) {
  printTitle(); // 함수 추출
  printDetails(receipt); // 함수 추출
  printTotalAmount(receipt); // 함수 추출
}

function printDetails(receipt) {
  receipt.forEach((product) => printDetail(product)); // for of문 ->  배열함수로 변경

  function printDetail(product) {
    console.log("상품명: " + product.productName);
    console.log("개당 가격: " + product.price);
    console.log("갯수: " + product.quantity);
    console.log("금액: " + caculateAmount(product)); // 함수추출

    printDivider(); // 함수추출
  }
}

function printTotalAmount(receipt) {
  console.log("합계: " + calculateTotalAmount(receipt)); // 함수 추출

  function calculateTotalAmount(receipt) {
    return receipt.reduce((acc, product) => acc + caculateAmount(product), 0); //  for문 -> 배열함수로 변경
  }
}

function caculateAmount(product) {
  const basePrice = product.price * product.quantity; // 변수 추출
  const discount = basePrice * product.discountPercent; // 변수 추출

  return basePrice - discount;
}

function printTitle() {
  console.log("<영수증>");
  printDivider();
}

function printDivider() {
  console.log("==========");
}
