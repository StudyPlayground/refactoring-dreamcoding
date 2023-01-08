const userData = {
  name: '홍길동',
  account: {
    bank: '신한',
    number: 111111111111,
  },
};

class User {
  #name;
  #account;
  constructor(name, account) {
    this.#name = name;
    this.#account = new Account(account.bank, account.number);
  }
  get name() {
    return this.#name;
  }
  get accountBankName() {
    return this.#account.bank;
  }
  set accountBankName(value) {
    this.#account = new Account(value, this.accountBankNumber);
  }
  get accountBankNumber() {
    return this.#account.number;
  }
  set accountBankNumber(value) {
    this.#account = new Account(this.accountBankName, value);
  }
}

class Account {
  #bank;
  #number;
  constructor(bank, number) {
    this.#bank = bank;
    this.#number = number;
  }
  get bank() {
    return this.#bank;
  }

  get number() {
    return this.#number;
  }
}

const user = new User(userData.name, userData.account);
