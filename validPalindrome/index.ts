/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
const isValidPalindrome = (sentence: string): boolean => {
  let regex1 = /[\W_]/gi;
  let regex2 = /[^a-z0-9]/gi;
  sentence = sentence.toLowerCase().replace(regex2, '');
  console.log(sentence);
  let currentChars = sentence.split('');
  if (currentChars.length === 0) {
    return true;
  }
  let start = 0;
  let end = currentChars.length - 1;
  while (start < end) {
    if (currentChars[start] !== currentChars[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(
  isValidPalindrome(
    'A man__ < > | ~ ! @ # $ % ^ & * (  ) _  +, a plan, a canal: Panama'
  )
);

console.log(isValidPalindrome('race a car'));

console.log(isValidPalindrome('madam'));

console.log(isValidPalindrome('   '));

console.log(isValidPalindrome('aa'));
