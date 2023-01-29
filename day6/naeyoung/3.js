class User {
  constructor(name) {
    this.name = name;
  }
}

class PendingUser extends User {
  constructor(name, pendingReason) {
    super(name);
    this.pendingReason = pendingReason;
  }
}

class RejectedUser extends User {
  constructor(name, rejectedTime, rejectedReason) {
    super(name);
    this.rejectedTime = rejectedTime;
    this.rejectedReason = rejectedReason;
  }
}

class RegisteredUser extends User {
  constructor(name, lastLoginDate) {
    super(name);
    this.loggedInTime = lastLoginDate;
  }
}
