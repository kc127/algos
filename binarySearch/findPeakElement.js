/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let peakIdx = 0;

  while (left < right) {
      let mid = left + Math.floor((right - left)/2);
      if (nums[mid] > nums[mid + 1]) {
          peakIdx = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return peakIdx;
};