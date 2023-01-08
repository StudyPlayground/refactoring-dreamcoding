class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

class UnknownUser extends user {
  constructor() {
    super("John"); // "john"이라는 이름보단 알려지지 않은 유저가 적합할것같습니다!
  }
}

class UserList {
  #userList;
  constructor() {
    this.#userList = [];
  }
  addUser(name) {
    if (!name) this.#userList.push(new UnknownUser());
    this.#userList.push(new User(name));
  }
  deleteUser(name) {
    this.#userList = this.#userList.filter((user) => user.name !== name);
  }
  print() {
    this.#userList.forEach((user) => console.log(`${user.name}`));
    console.log("------");
  }
}

const nameList = ["Lily", "James", "Peter", ""];
const userList = new UserList();

nameList.forEach((name) => {
  userList.addUser(name);
});

userList.print();
