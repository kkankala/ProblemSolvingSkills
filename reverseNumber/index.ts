/**
 * Reverse integer number
 * @param num number to reverse
 * @returns
 */
var reverseNumber = function (num: any) {
  // Convert the number to a string, split it to an array, reverse it, and then re-join it
  const reversedNumber = parseInt(
    Math.abs(num).toString().split('').reverse().join('')
  );

  // Check for an invalid output
  if (reversedNumber > 2147483647) {
    return 0;
  }

  // Return the reversed number (negating it if the original number was negative)
  return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
};
