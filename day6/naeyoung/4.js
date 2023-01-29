class Notification {
  #isRead;
  #content;
  constructor(isRead, content) {
    this.#isRead = isRead;
    this.#content = { ...content };
  }
  get content() {
    return this.#content;
  }
}

class CreateNotification extends Notification {
  constructor(isRead, { productName, processingStatus }) {
    super(isRead, { productName, processingStatus });
  }
  get type() {
    return 'create';
  }
}

class UpdateNotification extends Notification {
  constructor(isRead, { prevProductName, newProductName, processingStatus }) {
    super(isRead, { prevProductName, newProductName, processingStatus });
  }
  get type() {
    return 'update';
  }
}

class NoticeNotification extends Notification {
  constructor(isRead, { text }) {
    super(isRead, { text });
  }

  get type() {
    return 'notice';
  }
}

class AdvertisingNotification extends Notification {
  constructor(isRead, { text }) {
    super(isRead, { text });
  }
}

function createAdvertising() {
  return '임의의 광고내용 생성';
}

const notificationList = [
  new AdvertisingNotification(false, { text: createAdvertising() }),
  new CreateNotification(false, {
    productName: '새로 생성된 상품명',
    processingStatus: '내부에서 확인후 생성중입니다.',
  }),
  new UpdateNotification(false, {
    prevProductName: '수정 전 상품명',
    newProductName: '수정 후 새로운 상품명',
    processingStatus: '내부에서 확인후 수정중입니다.',
  }),
  new NoticeNotification(false, {
    text: '새로운 기능이 추가될 예정입니다. 기대해주세요!',
  }),
];

notificationList.forEach((noti) => {
  switch (noti.type) {
    case 'create':
      console.log('생성요청 알림입니다.');
      console.log(noti.content);
      return;
    case 'update':
      console.log('수정 요청 알림입니다.');
      console.log(noti.content);
      return;
    case 'notice':
      console.log('공지사항 알림입니다.');
      console.log(noti.content);
      return;
    default:
      console.log(noti.content);
      return;
  }
});
