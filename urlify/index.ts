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

/**
 * This is Cracking the coding interview prob, but work only when you have trailing spaces and will fail when there are spaces at the beginning.
 * @param input
 * @param trueLength
 * @returns
 */
const replaceSpaces = (input: string, trueLength: number): string => {
  let spaceCount = 0;
  let index = 0;
  let char = input.split('');

  //count number of spaces
  for (let i = 0; i < trueLength; i++) {
    if (char[i] === ' ') {
      spaceCount++;
    }
  }

  console.log(`Total space count: ${spaceCount}`);
  index = trueLength + spaceCount * 2 - 1;
  console.log(`initialized index: ${index}`);

  for (let i = trueLength - 1; i >= 0; i--) {
    if (char[i] === ' ') {
      char[index] = '0';
      char[index - 1] = '2';
      char[index - 2] = '%';
      index -= 3;
    } else {
      char[index] = char[i];
      index--;
    }
  }
  return char.join('').trim();
};

printOutput('Combined string is :{0}', URLify('Mr John Smith      '));
printOutput('Combined string is :{0}', URLify('   Mr John Smith'));

// printOutput(
//   'Combined string is :{0}',
//   replaceSpaces('Mr John Smith      ', 13)
// );
// printOutput('Combined string is :{0}', replaceSpaces('   Mr John Smith', 13));
