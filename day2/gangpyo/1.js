const persons = [
  { name: "홍길동", age: 20, job: "도적" },
  { name: "짱구", age: 5 },
  { name: "소크라테스", age: 71, job: "철학자" },
];

class VIPmembers {
  #members;
  constructor(members) {
    this.#members = members;
  }

  printMember(name) {
    const targetMember = this.#members.find((member) => member.name === name);
    this.#print(targetMember);
  }

  addMember(info) {
    this.#members.push(info);
  }

  deleteMember(name) {
    const index = this.#members.findIndex((member) => member.name === name);
    this.#members.splice(index, 1);
  }

  printMembers() {
    this.#printBanner();
    this.#members.forEach((member) => this.#print(member));
  }

  #printBanner() {
    console.log("<VIP 회원 명단>");
  }

  #print({ name, age, job }) {
    console.log(name, age, job);
  }
}

const VIPs = new VIPmembers(persons);

VIPs.printMember("홍길동");
VIPs.printMember("짱구");
VIPs.printMember("소크라테스");

VIPs.deleteMember("짱구");
VIPs.printMembers();

VIPs.deleteMember("홍길동");
VIPs.printMembers();
