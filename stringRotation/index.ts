import { printOutput } from '../commonUtils/logger';

/**
 * StringRotation:Assume you have a method isSubstring which checks if one word is a substring of another.
 * Given two strings, S1 and S2, write code to check if S2 is a rotation of S1 using only one call to isSubstring
 *  (e.g., "waterbottle" is a rotation of" erbottlewat").
 * @param s1
 * @param s2
 * @returns
 */
const isRotation = (s1: string, s2: string): boolean => {
  const len = s1.length;

  if (len === s2.length && len > 0) {
    //s1 = xy = waterbottle;
    //s2 = yx = erbottlewat;
    //yx will always be a substring of xyxy.
    //s2 is always substring of s1s1;
    const s1s1: string = s1 + s1;
    return isSubstring(s1s1, s2);
  }
  return false;
};

const isSubstring = (string1: string, string2: string): boolean => {
  console.log(`string 1 is ${string1}`);
  console.log(`string 2 is ${string2}`);
  return string1.includes(string2);
};

printOutput(
  'is waterbottle a rotation of bottlewater? : ',
  isRotation('waterbottle', 'bottlewater')
);

printOutput(
  'is waterbottle a rotation of erbottlewat? : ',
  isRotation('waterbottle', 'erbottlewat')
);
printOutput(
  'is kalyankankala a rotation of kankalakalyan? : ',
  isRotation('kalyankankala', 'kankalakalyan')
);
