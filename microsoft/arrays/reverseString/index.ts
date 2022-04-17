/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * @param s
 */
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left++] = s[right];
    s[right--] = temp;
    // left++;
    // right--;
  }
}

let words = ['hello', 'kalyan', 'kankala', 'hannah'];
words.forEach((x) => {
  let s = x.split('');
  reverseString(s);
  console.log(s.join(''));
});
