class User {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

class DefaultUser extends User {
  constructor() {
    super('John');
  }
}

class UserList {
  #userList;
  constructor() {
    this.#userList = [];
  }

  addUser(name) {
    if (name) this.#userList.push(new User(name));
    else this.#userList.push(new DefaultUser());
  }

  deleteUser(name) {
    this.#userList = this.#userList.filter((user) => user.name !== name);
  }

  print() {
    this.#userList.forEach((user) => console.log(`${user.name}`));
    console.log('------');
  }
}

const nameList = ['Lily', 'James', 'Peter', ''];
const userList = new UserList();

nameList.forEach((name) => userList.addUser(name));

userList.print();
