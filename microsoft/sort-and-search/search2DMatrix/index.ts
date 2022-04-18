function searchMatrix(matrix: number[][], target: number): boolean {
  let lo = 0;
  let hi = matrix.length * matrix[0].length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let midRow = Math.floor(mid / matrix[0].length);
    let midCol = mid % matrix[0].length;
    //console.log('mid', mid, ' ', 'row', midRow, ' ', 'col', midCol);
    if (matrix[midRow][midCol] < target) lo = mid + 1;
    else if (matrix[midRow][midCol] > target) hi = mid - 1;
    else return true;
  }
  return false;
}
