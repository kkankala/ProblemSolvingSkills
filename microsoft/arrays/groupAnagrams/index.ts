// /**
//  * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//  * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//  * Solution: This method is counting the number of same sorted strings using object
//  * Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
//  * Space Complexity: O(n)
//  * @param strs
//  * @returns
//  */
// const groupAnagrams1 = (strs: string[]) => {
//   let obj = {} as any;
//   for (let str of strs) {
//     let letters = str.split('').sort().join('');
//     obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
//   }
//   return Object.values(obj);
// };

/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * Solution: This method is counting the number of same sorted strings using Map
 * Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
 * Space Complexity: O(n)
 * @param strs
 * @returns
 */
const groupAnagrams2 = (strs: string[]) => {
  let m = new Map();
  for (let str of strs) {
    let sorted = str.split('').sort().join('');
    if (m.has(sorted)) {
      m.set(sorted, [...m.get(sorted), str]);
    } else {
      m.set(sorted, [str]);
    }
  }
  return Array.from(m.values());
};

/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * Solution: This method is counting the repetition of characters using all lowercase array, it is not sorting
 * Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
 * Space Complexity: O(n)
 * @param strs
 * @returns
 */
const groupAnagrams3 = (strs: string[]) => {
  let res = {} as any;
  for (let str of strs) {
    let count = new Array(26).fill(0); //array with placeholders for all lowercase letters
    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    // console.log(count);
    let key = count.join('#');
    // console.log(key);
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};

// let response = groupAnagrams1(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

let response = groupAnagrams3(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

console.log(response);
debugger;
