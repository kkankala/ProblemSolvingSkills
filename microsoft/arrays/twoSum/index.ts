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
    //nums[i] + x = target
    // -> x = target - nums[i]
    // -> gather nums[i] and index of element x
    if (nums.includes(target - nums[i])) {
      //skip if x is the current index. [...twoSum([3, 3], 6)]
      if (i === nums.indexOf(target - nums[i])) {
        // console.log(
        //   `i is ${i}, nums[i] is ${nums[i]} and x is :${target - nums[i]}`
        // );
        // console.log(
        //   `nums index with x value : ${nums.indexOf(target - nums[i])}`
        // );
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
printOutput('input is [3,2,4]', [...twoSum([3, 2, 4], 6)]);
printOutput('input is [3,3]', [...twoSum([3, 3], 6)]);
