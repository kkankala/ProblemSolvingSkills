import { printOutput } from '../commonUtils/logger';

/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 * @param x String
 */
const isUnique = (x: string): boolean => {
  let myMap = new Map<string, string>();
  const inputArray = x.split('');
  for (let i = 0; i < inputArray.length; i++) {
    let currentElement = inputArray[i].toLocaleLowerCase();
    if (myMap.get(currentElement)) {
      return false;
    } else {
      myMap.set(currentElement, currentElement);
    }
  }
  return true;
};

printOutput('is kalyan unique :', isUnique('kalyan'));
printOutput('is ` moun ika` unique :', isUnique(' moun ika'));
printOutput('is mounika unique :', isUnique('mounika'));
printOutput('is ridhi unique :', isUnique('ridhi'));
