class Pending {
  #pendingReason;

  constructor(pendingReason) {
    this.#pendingReason = pendingReason;
  }

  get pendingReason() {
    return this.#pendingReason;
  }
}

class Registered {
  #lastLoginDate;

  constructor(lastLoginDate) {
    this.#lastLoginDate = lastLoginDate;
  }

  get lastLoginDate() {
    return this.#lastLoginDate;
  }
}

class Rejected {
  #rejectedTime;
  #rejectedReason;

  constructor(rejectedTime, rejectedReason) {
    this.#rejectedTime = rejectedTime;
    this.#rejectedReason = rejectedReason;
  }

  get rejectedTime() {
    return this.#rejectedTime;
  }

  get rejectedReason() {
    return this.#rejectedReason;
  }
}

class User {
  #name;
  #state;
  constructor(name, state) {
    this.#name = name;
    this.#state = state;
  }

  get state() {
    return this.#state;
  }

  set state(state) {
    this.#state = state;
  }
}

// 출력 예시
const testUser1 = new User("Kim", new Pending("network is slow.."));
console.log(testUser1.state.pendingReason);
testUser1.state = new Registered(new Date());
console.log(testUser1.state.lastLoginDate);
