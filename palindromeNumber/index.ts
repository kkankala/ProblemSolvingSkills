import { printOutput } from '../commonUtils/logger';

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const currentChars: string[] = [...x.toString()];
  if (currentChars.length === 1) {
    return true;
  }
  let start: number = 0;
  let end: number = currentChars.length - 1;
  while (start <= end) {
    if (currentChars[start] !== currentChars[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

printOutput('Input: 121 and output is', isPalindrome(121));
printOutput('Input: -121 and output is', isPalindrome(-121));
printOutput('Input: 0 and output is', isPalindrome(0));
