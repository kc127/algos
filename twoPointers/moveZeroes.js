function moveZeroes(arr) {
  let slow = 0;
  let fast = 0;
  while (fast < arr.length) {
    if (arr[fast] === 0) {
      if (arr[slow] !== 0) {
        slow = fast;
      }
      fast++;
    } else {
      let temp = arr[slow];
      arr[slow] = arr[fast];
      arr[fast] = temp;
      slow++;
      fast++;
    }
  }
  return arr;
}

// approach 2: simpler + optimal
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length && j < nums.length) {
      if (nums[j] !== 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          i++;
      }
      j++;
  }
};