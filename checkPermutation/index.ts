import { printOutput } from '../commonUtils/logger';

/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 * Method 1 - Sort strings and compare each char. This method is not optimal from space point of view.
 */
const isPermutation1 = (s: string, t: string): boolean => {
  //if different length, then they can't be permutation of each other
  if (s.length !== t.length) {
    return false;
  }

  // sorted strings will have same characters
  let sortedStringS = s.split('').sort();
  let sortedStringT = t.split('').sort();

  // compare sorted chars
  for (let i = 0; i < sortedStringS.length; i++) {
    if (sortedStringS[i] !== sortedStringT[i]) {
      return false;
    }
  }

  return true;
};

/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 * Method 2 - Count number of times each character occurred in both strings
 */
const isPermutation2 = (s: string, t: string): boolean => {
  let numberOfChars = 128;
  //if different length, then they can't be permutation of each other
  if (s.length !== t.length) {
    return false;
  }

  // Create a letters array and initialize all
  // values as 0
  let letters: any = new Array(numberOfChars);
  let i;
  let str1 = s.split('');

  // For each character in input string, count them
  for (i = 0; str1[i]; i++) {
    letters[str1[i]]++;
  }

  // See if there is any non-zero value in
  // count array
  for (i = 0; i < t.length; i++) {
    let c: any = t.charAt(i);
    letters[c]--;
    if (letters[i] < 0) {
      return false;
    }
  }

  return true;
};

printOutput(
  'is `kalyan` permutation of `alaynk` ? :',
  isPermutation2('kalyan', 'alaynk')
);

printOutput(
  'is `kalyan` permutation of `alaynk` ? :',
  isPermutation1('kalyan', 'alaynk')
);

printOutput(
  'is `kalyan` permutation of `alaynka` ? :',
  isPermutation1('kalyan', 'alaynka')
);

printOutput(
  'is `kalyan` permutation of `alaank` ? :',
  isPermutation1('kalyan', 'alaank')
);
