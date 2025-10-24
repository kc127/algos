// Approach 1

function twoSumSorted(arr, target) {
  if (arr.length === 0) return [];

let left = 0;
let right = arr.length - 1;

while (left < arr.length && right >= 0) {
  let currSum = arr[left] + arr[right];
  if (currSum > target) {
    right--;
  } else if (currSum < target) {
    left++;
  } else if (currSum === target) {
    return [left, right];
  }
}
}

// Approach 2
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    let currSum = numbers[start] + numbers[end];
    if (currSum === target) {
      return [start + 1, end + 1];
    }
    if (currSum < target) {
      start++;
    } else {
      end--;
    }
  }
};