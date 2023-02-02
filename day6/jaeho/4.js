class Notification {
  #isRead;
  #notification;

  constructor(isRead, notification) {
    this.#isRead = isRead;
    this.#notification = notification;
  }

  print() {
    this.#notification.print();
  }

  static create(isRead, content) {
    return new Notification(isRead, new Create(content));
  }

  static update(isRead, content) {
    return new Notification(isRead, new Update(content));
  }

  static notice(isRead, content) {
    return new Notification(isRead, new Notice(content));
  }

  static advertise(isRead, content) {
    return new Notification(isRead, new Advertise(content));
  }
}

class Create {
  #content;

  constructor({ productName, processingStatus }) {
    this.#content = { productName, processingStatus };
  }

  print() {
    console.log("생성요청 알림입니다.");
    console.log(this.#content);
  }
}

class Update {
  #content;

  constructor({ prevProductName, newProductName, processingStatus }) {
    this.#content = {
      prevProductName,
      newProductName,
      processingStatus,
    };
  }

  print() {
    console.log("수정 요청 알림입니다.");
    console.log(this.#content);
  }
}

class Notice {
  #content;

  constructor({ text }) {
    this.#content = { text };
  }

  print() {
    console.log("공지사항 알림입니다.");
    console.log(this.#content);
  }
}

class Advertise {
  #content;

  constructor({ text }) {
    this.#content = { text };
  }

  print() {
    console.log(this.#content);
  }
}

function createAdvertising() {
  return "임의의 광고내용 생성";
}

const notificationList = [
  Notification.advertise(false, { text: createAdvertising() }),
  Notification.create(false, {
    productName: "새로 생성된 상품명",
    processingStatus: "내부에서 확인후 생성중입니다.",
  }),
  Notification.update(false, {
    prevProductName: "수정 전 상품명",
    newProductName: "수정 후 새로운 상품명",
    processingStatus: "내부에서 확인후 수정중입니다.",
  }),
  Notification.notice(false, {
    text: "새로운 기능이 추가될 예정입니다. 기대해주세요!",
  }),
];

notificationList.forEach((noti) => noti.print());
