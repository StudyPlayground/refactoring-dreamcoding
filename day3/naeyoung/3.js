class Store {
  #name;
  #phoneNumber;
  constructor(name, phoneNumber) {
    this.#name = name;
    this.#phoneNumber = phoneNumber;
  }

  get name() {
    return this.#name;
  }
  get phoneNumber() {
    return this.#phoneNumber;
  }
}

class Company {
  #companyName;
  #businessNumber;
  #store;
  constructor(companyName, businessNumber, storeName, storeTelephoneNumber) {
    this.#companyName = companyName;
    this.#businessNumber = businessNumber;
    this.#store = new Store(storeName, storeTelephoneNumber);
  }

  get companyName() {
    return this.#companyName;
  }

  get businessNumber() {
    return this.#businessNumber;
  }
  get storeName() {
    return this.#store.name;
  }

  get storeTelephoneNumber() {
    return this.#store.phoneNumber;
  }
}
const testCompany = new Company(
  '테스트사업자',
  '1111111111111',
  '테스트가게',
  '00000000000'
);

console.log('testCompany.companyName :>> ', testCompany.companyName);
console.log('testCompany.businessNumber :>> ', testCompany.businessNumber);
console.log('testCompany.storeName :>> ', testCompany.storeName);
console.log(
  'testCompany.storeTelephoneNumber :>> ',
  testCompany.storeTelephoneNumber
);
