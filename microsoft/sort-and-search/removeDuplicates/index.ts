/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 *
 *
 * Time: O(n)
 * Space: O(1)
 * @param nums
 */
const removeDuplicates = (nums: number[]): number => {
  let n = nums.length;
  if (n === 0) {
    return 0;
  }

  // first element is always unique, so we want to update anything from index 1:
  let insertIndex = 1;

  //start at one because we will compare with previous element in array.
  //If they are different update at in-place and move insertIndex. If they are same do nothing.
  for (let index = 1; index < n; index++) {
    if (nums[index] !== nums[index - 1]) {
      nums[insertIndex] = nums[index];
      insertIndex++;
    }
  }

  return insertIndex;
};

let input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(input);
console.log(removeDuplicates(input));
console.log(input);
debugger;
