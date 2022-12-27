class VIPAccountList {
  #accountList;
  constructor() {
    this.#accountList = new Map();
  }
  addVIPAccount(name, age, job) {
    this.#accountList.set(name, { age, job });
  }
  deleteVIPAccount(name) {
    this.#accountList.delete(name);
  }

  printList() {
    console.log('<VIP 회원 명단>');
    for (let [name, { age, job }] of this.#accountList) {
      console.log(name, age, job);
    }
  }
}

const vipList = new VIPAccountList();

vipList.addVIPAccount('홍길동', 20, '도적');
vipList.addVIPAccount('짱구', 20);
vipList.addVIPAccount('소크라테스', 71, '철학자');

vipList.deleteVIPAccount('짱구');
vipList.printList();
vipList.deleteVIPAccount('홍길동');
vipList.printList();
