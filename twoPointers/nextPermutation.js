function nextPermutation (nums) {
  let pivotIndex = nums.length - 2;

  // step 1: find pivotIndex
  while (pivotIndex >= 0) {
    if (nums[pivotIndex] < nums[pivotIndex + 1]) {
      break;
    }
    pivotIndex--;
  }

  // step 2: swap
  while (pivotIndex >= 0) {
    for (let swapIndex = nums.length - 1; swapIndex > pivotIndex; swapIndex--) {
      if (nums[swapIndex] > nums[pivotIndex]) {
        [nums[pivotIndex], nums[swapIndex]] = [nums[swapIndex], nums[pivotIndex]];
        break;
      }
    }
  }

  // step 3: reverse
  let left = pivotIndex + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

console.log(nextPermutation([1, 2, 3]), ' expect [1, 3, 2]');
console.log(nextPermutation([3, 2, 1]), ' expect [1, 2, 3]');
