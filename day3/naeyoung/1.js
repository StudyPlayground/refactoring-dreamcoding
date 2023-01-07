const odds = [];
const datas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function check(num) {
  if (num % 2 === 0) return false;
  return true;
}

datas.forEach((data, idx, arr) => {
  if (check(data)) {
    odds.push(data);
  }
});

console.log(odds);
