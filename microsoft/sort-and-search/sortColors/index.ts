/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 * ex: Input: nums = [2,0,2,1,1,0], Output: [0,0,1,1,2,2]
 * ex: Input: nums = [2,0,1] Output: [0,1,2
 * @param nums
 */
let sortColors = (nums: number[]): void => {
  let left = 0;
  let right = nums.length - 1;
  let current = left;

  const swap = (left: number, right: number) => {
    [nums[left], nums[right]] = [nums[right], nums[left]];
  };

  while (current <= right) {
    if (nums[current] === 0) {
      swap(left, current);
      left++;
      current++;
    } else if (nums[current] === 1) {
      swap(right, current);
      right--;
    } else {
      current++;
    }
  }
};
