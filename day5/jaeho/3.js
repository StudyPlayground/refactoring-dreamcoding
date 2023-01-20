const orderProductErrorMessageMap = {
  name: "상품이름을 입력해주세요.",
  count: "상품 갯수를 입력해주세요.",
  orderTime: "주문 시간을 입력해주세요.",
  requestMessage: "요청 메세지를 선택해주세요.",
};

const validateArgs = (arg) => {
  if (arg) {
    return;
  }
  throw new Error(orderProductErrorMessageMap[arg]);
};

function orderProduct(...args) {
  args.forEach(validateArgs);
  return { ...args };
}
