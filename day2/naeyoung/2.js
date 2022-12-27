const receiptPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(
      JSON.stringify([
        {
          productName: '삼다수',
          quantity: 20,
          price: 500,
          discountPercent: 0.12,
        },
        {
          productName: '쫄병 스낵',
          quantity: 2,
          price: 1000,
          discountPercent: 0.08,
        },
        {
          productName: '마스크',
          quantity: 100,
          price: 300,
          discountPercent: 0.5,
        },
      ])
    );
  }, 2000);
});

receiptPromise.then((success) => {
  const res = JSON.parse(success);
  res.forEach((data) => printRecipt(data));
  printSum();

  function printRecipt(data) {
    console.log('<영수증>');
    console.log('==========');
    console.log('상품명: ' + data.productName);
    console.log('개당 가격: ' + data.price);
    console.log('갯수: ' + data.quantity);
    console.log(
      '금액: ' + data.price * data.quantity * (1 - data.discountPercent)
    );
    console.log('==========');
  }

  function printSum() {
    const sum = res
      .map((data) => data.price * data.quantity * (1 - data.discountPercent))
      .reduce((acc, cur) => acc + cur);
    console.log(sum);
  }
});
