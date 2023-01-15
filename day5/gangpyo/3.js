// 오류코드를 예외로 바꾸기
// 예외를 사전 확인으로 바꾸기
function orderProduct(name, count, orderTime, requestMessage) {
  if (!name) {
    throw new OrderProcessingError("상품명을 입력해주세요.");
  }

  return {
    name,
    count: count ?? 1,
    orderTime: orderTime ?? new Date(),
    requestMessage: requestMessage ?? "최대한 빨리 배송해주세요.",
  };
}

class OrderProcessingError extends Error {
  #errorMessage;
  constructor(errorMessage) {
    super();
    this.#errorMessage = errorMessage;
  }

  printError() {
    console.log(this.#errorMessage);
  }
}

try {
  orderProduct(undefined, 12, "20220107", ".부재시 문앞에 놔주세요.");
} catch (error) {
  if (error instanceof OrderProcessingError) {
    error.printError();
  }
}
