function isAllSame(arr) {
  const set = new Set(arr);
  return set.size === 1;
}

console.log(isAllSame([1, 2, 3, 4, 5]));
console.log(isAllSame([1, 1, 1, 1, 1]));
