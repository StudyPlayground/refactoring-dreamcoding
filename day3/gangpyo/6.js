function isAllSame(arr) {
  let min = Infinity;
  let max = -Infinity;

  arr.forEach((element) => {
    if (element < min) min = element;
    if (element > max) max = element;
  });

  return min === max;
}

console.log(isAllSame([1, 2, 3, 4, 5]));
console.log(isAllSame([1, 1, 1, 1, 1]));
