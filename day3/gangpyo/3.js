// 7.클래스 추출하기
// 7.위임숨기기
// 6.매개변수 객체만들기

class Company {
  #compayName;
  #businessNumber;
  #store;

  constructor(companyName, businessNumber, store) {
    this.#compayName = companyName;
    this.#businessNumber = businessNumber;
    this.#store = new Store(store.name, store.telephoneNumber);
  }

  get companyName() {
    return this.#compayName;
  }

  get businessNumber() {
    return this.#businessNumber;
  }

  get storeName() {
    return this.#store.name;
  }

  get storeTelephoneNumber() {
    return this.#store.telephoneNumber;
  }
}

class Store {
  #name;
  #telephoneNumber;

  constructor(name, telephoneNumber) {
    this.#name = name;
    this.#telephoneNumber = telephoneNumber;
  }

  get name() {
    return this.#name;
  }

  get telephoneNumber() {
    return this.#telephoneNumber;
  }
}

const testCompany = new Company("테스트사업자", "1111111111111", {
  name: "테스트가게",
  telephoneNumber: "00000000000",
});

console.log("testCompany.companyName :>> ", testCompany.companyName);
console.log("testCompany.businessNumber :>> ", testCompany.businessNumber);
console.log("testCompany.storeName :>> ", testCompany.storeName);
console.log(
  "testCompany.storeTelephoneNumber :>> ",
  testCompany.storeTelephoneNumber
);
