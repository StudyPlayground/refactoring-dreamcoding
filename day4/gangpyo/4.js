const items = [
  {
    name: "item1",
    type: "refund",
    status: false,
  },
  {
    name: "item2",
    type: "refund",
    status: true,
  },
  {
    name: "item3",
    type: "free",
    hasSample: true,
  },
  {
    name: "item4",
    type: "free",
    hasSample: false,
  },
  {
    name: "item5",
    type: "exchange",
    fee: true,
  },
  {
    name: "item6",
    type: "exchange",
    fee: false,
  },
];

function printMessage(item) {
  if (item.type === "refund") {
    printRefundItem(item);

    return;
  }
  if (item.type === "free") {
    printFreeItem(item);

    return;
  }
  if (item.type === "exchange") {
    printExchangeItem(item);

    return;
  }
}

function printRefundItem(item) {
  if (item.status) {
    console.log("환불처리가 완료된 상품입니다.");

    return;
  }

  console.log("환불처리 대기중인 상품입니다.");
}

function printFreeItem(item) {
  if (item.hasSample) {
    console.log("샘플이 포함된 무료상품입니다.");

    return;
  }

  console.log("샘플이 포함되지 않는 무료상품입니다.");
}

function printExchangeItem(item) {
  if (item.fee) {
    console.log("추가배송비가 포함된 교환상품입니다.");

    return;
  }

  console.log("추가배송비가 포함되지 않는 교환상품입니다.");
}

items.forEach((item) => printMessage(item));
