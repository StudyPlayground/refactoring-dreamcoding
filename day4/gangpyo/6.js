function checkUsersRank(user) {
  if (user.consumption < 1000) {
    return "C";
  }

  if (user.point <= 200) {
    return "B";
  }

  return "A";
}

const user1 = { name: "user1", consumption: 10000, point: 500 };
const user2 = { name: "user2", consumption: 100, point: 10 };
const user3 = { name: "user3", consumption: 1500, point: 100 };

console.log(checkUsersRank(user1));
console.log(checkUsersRank(user2));
console.log(checkUsersRank(user3));
