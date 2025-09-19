function fixedSizedSum (nums, k) {
  let maxSum = 0;
  let end = 0;
  let currSum = 0;

  for (let start = 0; start < nums.length; start++) {
    currSum += nums[start];
    if (start - end + 1 === k) {
      maxSum = Math.max(maxSum, currSum);
      currSum -= nums[end];
      end++;
    }
  }

  return maxSum;
}

console.log(fixedSizedSum([1, 2, 3, 7, 4, 1], 3), ' expect 14')