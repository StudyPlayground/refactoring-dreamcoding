// 슈퍼클래스 추출하기
// 서브클래스를 위임하기

function createAdvertising() {
  return "임의의 광고내용 생성";
}

class Notification {
  #isRead;
  #content;

  constructor(isRead, content) {
    this.#isRead = isRead;
    this.#content =
      content ?? new AdvertisingCotent({ text: createAdvertising() });
  }

  printContent() {
    this.#content.print();
  }
}

class AdvertisingCotent {
  #text;
  constructor({ text }) {
    this.#text = text;
  }

  print() {
    console.log({ text: this.#text });
  }
}

class CreateContent {
  #productName;
  #processingStatus;
  constructor({ productName, processingStatus }) {
    this.#productName = productName;
    this.#processingStatus = processingStatus;
  }

  print() {
    console.log("생성요청 알림입니다.");
    console.log({
      productName: this.#productName,
      processingStatus: this.#processingStatus,
    });
  }
}

class UpdateContent {
  #prevProductName;
  #newProductName;
  #processingStatus;
  constructor({ prevProductName, newProductName, processingStatus }) {
    this.#prevProductName = prevProductName;
    this.#newProductName = newProductName;
    this.#processingStatus = processingStatus;
  }

  print() {
    console.log("수정 요청 알림입니다.");
    console.log({
      prevProductName: this.#prevProductName,
      newProductName: this.#newProductName,
      processingStatus: this.#processingStatus,
    });
  }
}

class NoticeContent {
  #text;
  constructor({ text }) {
    this.#text = text;
  }

  print() {
    console.log("공지사항 알림입니다.");
    console.log({
      text: this.#text,
    });
  }
}

const notificationList = [
  new Notification(false),
  new Notification(
    false,
    new CreateContent({
      productName: "새로 생성된 상품명",
      processingStatus: "내부에서 확인후 생성중입니다.",
    })
  ),
  new Notification(
    false,
    new UpdateContent({
      prevProductName: "수정 전 상품명",
      newProductName: "수정 후 새로운 상품명",
      processingStatus: "내부에서 확인후 수정중입니다.",
    })
  ),
  new Notification(
    false,
    new NoticeContent({
      text: "새로운 기능이 추가될 예정입니다. 기대해주세요!",
    })
  ),
];

notificationList.forEach((noti) => {
  noti.printContent();
});
