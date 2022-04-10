/**
 *
 * Problem: Palindrome Permutation: Given a string, write a function to check if
 * it is a permutation of a palindrome. A palindrome is a word or phrase that is
 * the same forwards and backwards. A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 *
 * EXAMPLE Input: tact coa Output: True (permutations: "taco cat'; "atco eta·;
 * etc.)
 *
 */

const isPalindromePermutation = (input) => {
  if (!input) {
    return false;
  }

  let countOdd = 0;
  let counts = new Array(26); // lower characters

  for (const c of input) {
    if (c >= 'a' && c <= 'z') {
      console.log('what is c-a', c - 'a');
      counts[c - 'a']++;
      if (counts[c - 'a'] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }
  return countOdd < 2;
};

console.log('tact coa :', isPalindromePermutation('tact coa'));
console.log('tactcoapapa: ', isPalindromePermutation('tactcoapapa'));
console.log('tactcoapadkpa: ', isPalindromePermutation('tactcoapadkpa'));
