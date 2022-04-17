/**
 * converts a string to a 32-bit signed integer
 * @param s s consists of english letters(lower-case n upper-case), digits(0-9), empty space, +,- and .
 * The algorithm for myAtoi(string s) is as follows:
 * 1. Read in and ignore any leading whitespace.
 * 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
 * 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
 * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
 * 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
 * 6. Return the integer as the final result.
 */
const myAtoi = (s: string): number => {
  let sign = 1;
  let result = 0;
  let index = 0;
  let stringLength = s.length;

  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = -Math.pow(2, 31);

  // Discard all spaces from the beginning of the input string.
  while (index < stringLength && s[index] === ' ') {
    index++;
  }

  //assign sign, if + and - found in string
  if (index < stringLength && s[index] === '+') {
    sign = 1;
    index++;
  } else if (index < stringLength && s[index] === '-') {
    sign = -1;
    index++;
  }

  while (index < stringLength && s[index] >= '0' && s[index] <= '9') {
    //Makes sure the next char will not be more than INT_MAX
    let digit = (s[index] as any) - ('0' as any);
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = 10 * result + digit;
    index++;
  }

  return sign * result;
};

console.log(myAtoi('10000000001'));
console.log(myAtoi('42'));
console.log(myAtoi('   -42'));
console.log(myAtoi('4193 with words'));
