/**
 * Binary Search
 * @param listOfNumbers Array
 * @param target Element to find
 * @returns true or false
 */
let binarySearch = (listOfNumbers: number[], target: number): boolean => {
  let left = 0;
  let right = listOfNumbers.length - 1;
  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (listOfNumbers[mid] === target) {
      return true;
    }
    if (listOfNumbers[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

console.log(binarySearch([9, 4, 9, 8, 4], 9));
