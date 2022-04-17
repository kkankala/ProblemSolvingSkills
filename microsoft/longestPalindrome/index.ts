/**
 * Given a string s, return the longest palindromic substring in s.
 * @param word
 * @returns longest palindrome string
 */
const longestPalindrome = (word: string) => {
  if (word === null || word.length < 1) {
    return '';
  }

  let start = 0;
  let end = 0;
  for (let i = 0; i < word.length; i++) {
    let firstLength = expandFromMiddle(word, i, i); //odd length
    let secondLength = expandFromMiddle(word, i, i + 1); //even length
    let maxLength = Math.max(firstLength, secondLength);
    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2); //
      end = i + Math.floor(maxLength / 2);
    }
  }
  // console.log(start);
  // console.log(end);
  return word.slice(start, end + 1);
};

var expandFromMiddle = (
  word: string,
  leftPosition: number,
  rightPosition: number
) => {
  if (word === null || leftPosition > rightPosition) {
    return 0;
  }

  while (
    leftPosition >= 0 &&
    rightPosition < word.length &&
    word[leftPosition] === word[rightPosition]
  ) {
    leftPosition--;
    rightPosition++;
  }
  return rightPosition - leftPosition - 1;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('madam'));
console.log(longestPalindrome('ticcit'));
console.log(longestPalindrome('ababbaba'));
