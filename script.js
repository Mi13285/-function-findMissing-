const findMissing = function (list) {
  let summa = list.reduce((a, b) => a + b, 0);
  return ((list[list.length - 1] + list[0]) * (list.length + 1)) / 2 - summa;
};
console.log(findMissing([1, 3, 4]));
