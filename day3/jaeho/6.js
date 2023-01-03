function isAllSame(arr) {
  const sum = arr.reduce((total, current) => total + current, 0);
  const sumIfAllSame = arr[0] * arr.length;
  return sum === sumIfAllSame;
}

console.log(isAllSame([1, 2, 3, 4, 5]));
console.log(isAllSame([1, 1, 1, 1, 1]));
