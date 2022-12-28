// - 연관있는 데이터, 메서드끼리 묶기 위해 클래스로 캡슐화하기
//    - Account: 데이터를 저장하는 기능, 출력하는 기능
//    - Accounts: 데이터를 목록에 저장하는 기능, 출력하는 기능, 목록에서 데이터를 삭제하는 기능
// - 데이터의 불변성 유지
//    - 회원 목록: splice -> filter
// - name은 유일한 값이 아닐 수 있기에 인스턴스로 구분한다.
// - 매개변수가 undefined인 경우 기본값 매개변수를 이용한다.

class Account {
  #name;
  #age;
  #job;
  constructor(name, age, job = "") {
    this.#name = name;
    this.#age = age;
    this.#job = job;
  }

  printDetail() {
    console.log(`${this.#name} ${this.#age} ${this.#job}`);
  }
}

class VIPAccounts {
  #vipAccounts;

  constructor() {
    this.#vipAccounts = [];
  }

  addAccount(account) {
    this.#vipAccounts.push(account);
  }

  printAccounts() {
    console.log("<VIP 회원 명단>");
    this.#vipAccounts.forEach((account) => account.printDetail());
  }

  deleteAccount(account) {
    this.#vipAccounts = this.#vipAccounts.filter(
      (vipAccount) => vipAccount !== account
    );
  }
}

const vipAccounts = new VIPAccounts();

const account1 = new Account("홍길동", 20, "도적");
const account2 = new Account("짱구", 5);
const account3 = new Account("소크라테스", 71, "철학자");

account1.printDetail();
account2.printDetail();
account3.printDetail();

vipAccounts.addAccount(account1);
vipAccounts.addAccount(account2);
vipAccounts.addAccount(account3);

vipAccounts.deleteAccount(account2);
vipAccounts.printAccounts();
vipAccounts.deleteAccount(account1);
vipAccounts.printAccounts();
