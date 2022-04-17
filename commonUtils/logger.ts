import { LinkedListNode } from './linkedList';

export const printOutput = (
  message: string,
  ...optionalParams: any[]
): void => {
  console.log(message, ...optionalParams);
};

export const printMatrix = (matrix: number[][]): void => {
  let arrText = '';
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      arrText += matrix[i][j] + ' ';
    }
    console.log(arrText);
    arrText = '';
  }
};

export const printLinkedListNode = (
  currentNode: LinkedListNode<number> | null
) => {
  let currentText = '';
  while (currentNode !== null) {
    currentText = currentText
      ? currentText + ' --> ' + currentNode?.data
      : currentNode?.data?.toString();
    currentNode = currentNode?.next;
  }
  console.log(`${currentText}`);
};
