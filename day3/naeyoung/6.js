function isAllSame(arr) {
  return Math.max(...arr) === Math.min(...arr);
}

console.log(isAllSame([1, 2, 3, 4, 5]));
console.log(isAllSame([1, 1, 1, 1, 1]));
