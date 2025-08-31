function areValuesUnique(arr) {

  return new Set(arr).size === arr.length;
}

console.log(areValuesUnique([1, 2, 3, 4]));
console.log(areValuesUnique([1, 2, 2, 3]));
console.log(areValuesUnique([10, -5, 0, 10]));
console.log(areValuesUnique([6, 11, 23, 12]));