/**
 * Binary Search
 * @param listOfNumbers Array
 * @param target Element to find
 * @returns true or false
 */
let binarySearch = (listOfNumbers: number[], target: number): boolean => {
  let left = 0; //start of array
  let right = listOfNumbers.length - 1; //right most index of array

  //while within array range limits
  while (left <= right) {
    let mid = left + (right - left) / 2; // find midpoint of the array.
    // console.log(`${mid} is ${mid % 2 === 0 ? 'even' : 'false'} `);

    if (listOfNumbers[mid] === target) {
      return true;
    }

    if (listOfNumbers[mid] > target) {
      right = mid - 1; //move higher bound to the left of middle, keeping lower bound same
    } else {
      left = mid + 1; // move lower bound to the right of middle, keeping higher bound same
    }
  }

  return false;
};

let target = 9;
let isFound = binarySearch([9, 4, 9, 8, 4], target);
console.log(`is target:${target} found? ${isFound}`);
