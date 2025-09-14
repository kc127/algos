function containerWithMostWater(heights) {
  let start = 0;
  let end = heights.length - 1;
  let maxArea = 0;
  while (start < end) {
    let breadth = end - start;
    let height = Math.min(heights[start], heights[end]);
    let currArea = breadth * height;
    maxArea = Math.max(currArea, maxArea);

    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxArea;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]), ' expect 49');
console.log(containerWithMostWater([1,2,3]), ' expect 2');