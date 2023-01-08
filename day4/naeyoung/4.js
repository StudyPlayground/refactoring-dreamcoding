const items = [
  {
    name: 'item1',
    type: 'refund',
    status: false,
  },
  {
    name: 'item2',
    type: 'refund',
    status: true,
  },
  {
    name: 'item3',
    type: 'free',
    hasSample: true,
  },
  {
    name: 'item4',
    type: 'free',
    hasSample: false,
  },
  {
    name: 'item5',
    type: 'exchange',
    fee: true,
  },
  {
    name: 'item6',
    type: 'exchange',
    fee: false,
  },
];

class Item {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
  printMessage() {}
}

class RefundItem extends Item {
  #status;
  constructor({ name, status }) {
    super(name);
    this.#status = status;
  }

  printMessage() {
    if (this.#status) {
      console.log('환불처리가 완료된 상품입니다.');
    } else {
      console.log('환불처리 대기중인 상품입니다.');
    }
  }
}

class FreeItem extends Item {
  #hasSample;
  constructor({ name, hasSample }) {
    super(name);
    this.#hasSample = hasSample;
  }

  printMessage() {
    if (this.#hasSample) {
      console.log('샘플이 포함된 무료상품입니다.');
    } else {
      console.log('환불처리 대기중인 상품입니다.');
    }
  }
}

class ExchangeItem extends Item {
  #fee;
  constructor({ name, fee }) {
    super(name);
    this.#fee = fee;
  }

  printMessage() {
    if (this.#fee) {
      console.log('추가배송비가 포함된 교환상품입니다.');
    } else {
      console.log('추가배송비가 포함되지 않는 교환상품입니다.');
    }
  }
}

function createItem(item) {
  switch (item.type) {
    case 'refund':
      return new RefundItem(item);
    case 'free':
      return new FreeItem(item);
    case 'exchange':
      return new ExchangeItem(item);
    default:
      return new Item(item.name);
  }
}

items.forEach((item) => {
  createItem(item).printMessage();
});
