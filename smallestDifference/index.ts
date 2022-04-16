/**
 * Smallest Difference: Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.
EXAMPLE
Input: {l, 3, 15, 11, 2}, {23, 127, 235, 19, 8} Output: 3. That is, the pair (11, 8).
 */
let array1 = [1, 2, 15, 11, 2];
let array2 = [23, 127, 235, 4, 12, 19];
console.clear();
array1 = array1.sort((a, b) => (a < b ? -1 : 1));
array2 = array2.sort((a, b) => (a < b ? -1 : 1));
let a = 0;
let b = 0;
let difference = Number.MAX_VALUE;
// let array1 = [1, 2, 2, 11, 15];
// let array2 = [4, 12, 19, 23, 127, 235];
while (a < array1.length && b < array2.length) {
  let currentValue = Math.abs(array1[a] - array2[b]);
  if (currentValue < difference) {
    difference = currentValue;
  }

  //In the sorted array, check which element is smaller and move that, as moving larger will increase gap in difference.
  // for first case, |1-4|=3. If we move b |1-12|=11 and if we move a |2-4|=2, so moving minimum of a and b is the correct option.
  if (array1[a] < array2[b]) {
    a++;
  } else {
    b++;
  }
}

console.log(difference);
