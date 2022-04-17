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
