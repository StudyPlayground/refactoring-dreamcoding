// UserList 클래스의 불변성을 유지하기 위해 addUser 메서드에서 새로운 배열을 할당하도록 하였습니다.
// 이름이 없는 User의 경우 John으로 할당되도록 하였습니다.

class User {
  #name;

  constructor(name = "John") {
    this.#name = name === "" ? "John" : name;
  }

  get name() {
    return this.#name;
  }
}

class UserList {
  #users = [];

  addUser(name) {
    this.#users = [...this.#users, new User(name)];
  }

  deleteUser(name) {
    this.#users = this.#users.filter((user) => user.name !== name);
  }

  print() {
    this.#users.forEach((user) => console.log(`${user.name}`));
    console.log("------");
  }
}

const nameList = ["Lily", "James", "Peter", ""];
const userList = new UserList();

nameList.forEach((name) => userList.addUser(name));

userList.print();
