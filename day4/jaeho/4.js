// item의 type에 따라 분기처리를 클래스 안에서 작성하여 캡슐화하였습니다.
// 상속과 오버라이딩을 이용하여 각 클래스에 맞게 로직을 수행하도록 작성하였습니다.

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

class Item {
  #name;

  constructor(name) {
    this.#name = name;
  }

  printMessage() {
    const message = "상품의 종류를 판별할 수 없습니다.";
    console.log(message);
  }

  static createItem(item) {
    switch (item.type) {
      case "refund":
        return new RefundItem(item);
      case "free":
        return new FreeItem(item);
      case "exchange":
        return new ExchangeItem(item);
      default:
        return new Item();
    }
  }
}

class RefundItem extends Item {
  #status;

  constructor({ name, status }) {
    super(name);
    this.#status = status;
  }

  printMessage() {
    const message = this.#status
      ? "환불처리가 완료된 상품입니다."
      : "환불처리 대기중인 상품입니다.";
    console.log(message);
  }
}

class FreeItem extends Item {
  #hasSample;

  constructor({ name, hasSample }) {
    super(name);
    this.#hasSample = hasSample;
  }

  printMessage() {
    const message = this.#hasSample
      ? "샘플이 포함된 무료상품입니다."
      : "샘플이 포함되지 않는 무료상품입니다.";
    console.log(message);
  }
}

class ExchangeItem extends Item {
  #fee;

  constructor({ name, fee }) {
    super(name);
    this.#fee = fee;
  }

  printMessage() {
    const message = this.#fee
      ? "추가배송비가 포함된 교환상품입니다."
      : "추가배송비가 포함되지 않는 교환상품입니다.";
    console.log(message);
  }
}

function printMessage(item) {
  Item.createItem(item).printMessage();
}

items.forEach((item) => printMessage(item));
