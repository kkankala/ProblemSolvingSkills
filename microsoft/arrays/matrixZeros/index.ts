import { printMatrix } from '../../../commonUtils/logger';
/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 * You must do it in place.
 * @param matrix
 */
const setZeros = (matrix: number[][]): void => {
  let track = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        track.push([i, j]);
      }
    }
  }

  for (let i = 0; i < track.length; i++) {
    var [x, y] = track[i];
    // console.log(`x:${x} and y:${y}`);

    //update row
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[x][i] = 0;
    }

    //update column
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][y] = 0;
    }
  }
};
let useCase1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeros(useCase1);
printMatrix(useCase1);
let useCase2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeros(useCase2);
printMatrix(useCase2);
debugger;
