const reverseWords = (s: string): string => {
  s = s.trim();
  let words = s.split(/\s+/); //remove and split any extra spaces
  return words.reverse().join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('a good   example'));
