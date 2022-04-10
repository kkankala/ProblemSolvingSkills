import { printOutput } from '../commonUtils/logger';

/**
 * URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
 */
const URLify = (input: string): string => {
  let response = [];
  const spaceEncoder = '%20';
  let inputArray = input.split(' ');
  for (let index = 0; index < inputArray.length; index++) {
    const currentElement = inputArray[index];
    if (currentElement !== '') {
      response.push(currentElement);
      response.push(spaceEncoder);
    }
    if (response.join('').length === input.length) {
      break;
    }
  }
  return response.join('');
};

printOutput('Combined string is :{0}', URLify('Mr John Smith      '));
printOutput('Combined string is :{0}', URLify('   Mr John Smith'));
