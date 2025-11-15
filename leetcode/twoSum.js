/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      if (obj[diff] !== undefined) {
          return [obj[diff], i];
      }
      obj[nums[i]] = i;
  }
};