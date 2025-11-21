/*
https://leetcode.com/problems/max-area-of-island/description/?envType=company&envId=facebook&favoriteSlug=facebook-thirty-days
*/


const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function isInBounds(matrix, [x, y]) {
  if (x >= matrix.length || x < 0 || y >= matrix[0].length || y < 0) return false;
  return true;
}

function maxAreaOfIsland(grid) {
  let globalMax = 0;
  const visited = grid.map((row) => new Array(row.length).fill(0));

  function dfs([x, y]) {

    // check if we've visited this cell
    // check if we're in bounds
    if (visited[x][y] === 1) return 0;
    visited[x][y] = 1;

    if (grid[x][y] === 0) return 0;
    let area = 1;

    for (const direction of DIRECTIONS) {
      if (!isInBounds(grid, [x + direction[0], y + direction[1]])) continue;
      area += dfs([x + direction[0], y + direction[1]]);
    }

    return area;
  }

  if (!grid?.length || !grid[0]?.length) return 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const cell = grid[i][j];
      if (!cell || visited[i][j]) continue;
      // find a 1
      globalMax = Math.max(globalMax, dfs([i, j]));
    }
  }
  return globalMax;
}