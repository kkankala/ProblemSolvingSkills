/**
 * Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
EXAMPLE
Input: {l, 3, 15, 11, 2}, {23, 127, 235, 19, 8} Output: 3. That is, the pair (11, 8).
 */
let array1 = [1, 2, 15, 11, 2];
let array2 = [23, 127, 235, 19, 8];
console.clear();
array1 = array1.sort((a, b) => (a < b ? -1 : 1));
array2 = array2.sort((a, b) => (a < b ? -1 : 1));
let a = 0;
let b = 0;
let difference = Number.MAX_VALUE;
while (a < array1.length && b < array2.length) {
  let currentValue = Math.abs(array1[a] - array2[b]);
  if (currentValue < difference) {
    difference = currentValue;
  }
  if (array1[a] < array2[b]) {
    a++;
  } else {
    b++;
  }
}

console.log(difference);
