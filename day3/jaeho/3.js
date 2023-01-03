class Company {
  #compayName;
  #businessNumber;

  constructor(companyName, businessNumber) {
    this.#compayName = companyName;
    this.#businessNumber = businessNumber;
  }

  get companyName() {
    return this.#compayName;
  }

  get businessNumber() {
    return this.#businessNumber;
  }
}

class Store {
  #name;
  #telephoneNumber;
  #company;

  constructor(name, telephoneNumber, companyName, businessNumber) {
    this.#name = name;
    this.#telephoneNumber = telephoneNumber;
    this.#company = new Company(companyName, businessNumber);
  }

  get name() {
    return this.#name;
  }

  get telephoneNumber() {
    return this.#telephoneNumber;
  }

  get companyName() {
    return this.#company.companyName;
  }

  get businessNumber() {
    return this.#company.businessNumber;
  }
}

const testStore = new Store(
  "테스트사업자",
  "1111111111111",
  "테스트가게",
  "00000000000"
);

console.log("testStore.companyName :>> ", testStore.companyName);
console.log("testStore.businessNumber :>> ", testStore.businessNumber);
console.log("testStore.storeName :>> ", testStore.name);
console.log("testStore.storeTelephoneNumber :>> ", testStore.telephoneNumber);
