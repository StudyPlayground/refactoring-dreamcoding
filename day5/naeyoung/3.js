class orderError {
  #message;
  constructor(message) {
    this.#message = message;
  }

  get message() {
    return this.#message;
  }
}

function orderProduct(name, count, orderTime, requestMessage) {
  if (!name) {
    throw new orderError('상품이름을 입력해주세요.');
  }

  if (!count) {
    throw new orderError('상품 갯수를 입력해주세요.');
  }

  if (!orderTime) {
    throw new orderError('주문 시간을 입력해주세요.');
  }

  if (!requestMessage) {
    throw new orderError('요청 메세지를 선택해주세요.');
  }

  return { name, count, orderTime, requestMessage };
}

try {
  orderProduct(null, null, null, null);
} catch (error) {
  if (error instanceof orderError) {
    console.log(error.message);
  }
}
