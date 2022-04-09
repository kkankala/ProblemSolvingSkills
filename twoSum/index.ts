import { printOutput } from '../commonUtils/logger';

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints: check here - https://leetcode.com/problems/two-sum/

 * @param nums 
 * @param target 
 */
function twoSum(nums: number[], target: number): number[] {
  let response: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      if (i == nums.indexOf(target - nums[i])) {
        continue;
      }

      response.push(i);
      response.push(nums.indexOf(target - nums[i]));
      return response;
    }
  }

  return response;
}

printOutput('input is [2,7,11,15]', [...twoSum([2, 7, 11, 15], 9)]);
printOutput('input is [3,2,3]', [...twoSum([3, 2, 3], 6)]);
