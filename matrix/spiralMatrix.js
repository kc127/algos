function spiralOrder (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let top = 0, bottom = m - 1;
  let left = 0, right = n - 1;

  let output = [];
  let dir = 0;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        output.push(matrix[top][i]);
      }
      top++;
    } else if (dir === 1) {
      for (let i = top; i <= bottom; i++) {
        output.push(matrix[i][right]);
      }
      right--;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        output.push(matrix[bottom][i]);
      }
      bottom--;
    } else if (dir === 3) {
      for (let i = bottom; i >= top; i--) {
        output.push(matrix[i][left]);
      }
      left++;
    }
    dir = (dir + 1) % 4
  }
  return output;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(spiralOrder(matrix), ' expect [1,2,3,6,9,8,7,4,5]');