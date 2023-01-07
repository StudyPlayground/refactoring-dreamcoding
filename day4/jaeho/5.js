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
