/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * @param s - input string
 * @returns - a string of the words in reverse order concatenated by a single space.
 */
const reverseWords = (s: string): string => {
  s = s.trim();
  let words = s.split(/\s+/); //remove and split any extra spaces
  return words.reverse().join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('a good   example'));
