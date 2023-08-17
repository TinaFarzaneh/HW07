function sortFromHightoLow() {
  const arrays = Array.from(arguments);

  const flatArray = arrays.flat();

  const sortArray = flatArray.sort((a, b) => b - a);
  return sortArray;
}

console.log(sortFromHightoLow([5, 6, 2], [3, 7, 1]));
console.log(sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8]));
